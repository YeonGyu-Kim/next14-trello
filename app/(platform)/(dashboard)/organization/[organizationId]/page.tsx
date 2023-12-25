import { createBorad } from '@/actions/create-borad';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import Board from './board';
import Form from './form';

export default async function OrganizationPage() {
  const boards = await db.board.findMany();
  return (
    <div>
      <Form />
      <div className='space-x-2'>
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
}
