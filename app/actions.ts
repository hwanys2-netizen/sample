'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// 테이블 생성 함수 (개발 편의를 위해 액션 호출 시 테이블이 없으면 생성)
export async function createTableIfNotExists() {
  await sql`
    CREATE TABLE IF NOT EXISTS guestbook (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      body TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

export async function getGuestbookEntries() {
  try {
    await createTableIfNotExists();
    const entries = await sql`
      SELECT id, name, body, created_at 
      FROM guestbook 
      ORDER BY created_at DESC 
      LIMIT 50
    `;
    return entries;
  } catch (error) {
    console.error('Failed to fetch guestbook entries:', error);
    return [];
  }
}

export async function addGuestbookEntry(formData: FormData) {
  const name = formData.get('name') as string;
  const body = formData.get('body') as string;

  if (!name || !body) {
    throw new Error('Name and body are required');
  }

  try {
    await createTableIfNotExists();
    await sql`
      INSERT INTO guestbook (name, body)
      VALUES (${name}, ${body})
    `;
    
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to add guestbook entry:', error);
    throw new Error('Failed to add entry');
  }
}
