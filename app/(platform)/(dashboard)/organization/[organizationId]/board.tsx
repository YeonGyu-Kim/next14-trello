import deleteBoard from '@/actions/delete-board';
import { Button } from '@/components/ui/button';

type BoardProps = {
  title: string;
  id: string;
};

export default function Board({ title, id }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className='flex items-center gap-x-2'>
      <p>Boart title: {title}</p>
      <Button type='submit' variant='destructive' size='sm'>
        Delete
      </Button>
    </form>
  );
}
