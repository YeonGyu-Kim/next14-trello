import deleteBoard from '@/actions/delete-board';
import { Button } from '@/components/ui/button';
import FormDelete from './form-delete';

type BoardProps = {
  title: string;
  id: string;
};

export default function Board({ title, id }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className='flex items-center gap-x-2'>
      <p>Boart title: {title}</p>
      <FormDelete />
    </form>
  );
}
