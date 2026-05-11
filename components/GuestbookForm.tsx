'use client';

import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { addGuestbookEntry } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      {pending ? '저장 중...' : '방명록 남기기'}
    </button>
  );
}

export function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const action = async (formData: FormData) => {
    await addGuestbookEntry(formData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="홍길동"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">내용</label>
        <textarea
          name="body"
          id="body"
          required
          rows={3}
          placeholder="응원의 메시지를 남겨주세요!"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-none"
        />
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
