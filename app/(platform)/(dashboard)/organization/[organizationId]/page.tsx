import { createBorad } from '@/actions/create-borad';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import Board from './board';

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
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
}
