import { getGuestbookEntries } from '@/app/actions';
import { GuestbookForm } from './GuestbookForm';

export default async function Guestbook() {
  const entries = await getGuestbookEntries();

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">방명록</h2>
      
      <GuestbookForm />

      <div className="mt-8 space-y-4">
        {entries.map((entry: any) => (
          <div key={entry.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{entry.name}</span>
              <span className="text-sm text-gray-500">
                {new Date(entry.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-600 whitespace-pre-wrap">{entry.body}</p>
          </div>
        ))}
        {entries.length === 0 && (
          <p className="text-center text-gray-500 py-8">아직 작성된 방명록이 없습니다. 첫 번째 방명록을 남겨보세요!</p>
        )}
      </div>
    </div>
  );
}
