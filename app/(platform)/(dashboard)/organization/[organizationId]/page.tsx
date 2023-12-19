import { createBorad } from '@/actions/create-borad';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';

export default async function OrganizationPage() {
  const boards = await db.board.findMany();
  return (
    <div>
      <form action={createBorad}>
        <input
          className='border-black border p-1'
          id='title'
          name='title'
          required
          placeholder='Enter a board title'
        />
        <Button type='submit'>Submit</Button>
      </form>
      <div className='space-x-2'>
        {boards.map((board) => (
          <div key={board.id}>Board name: {board.title}</div>
        ))}
      </div>
    </div>
  );
}
