import { createBorad } from '@/actions/create-borad';

export default function OrganizationPage() {
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
      </form>
    </div>
  );
}
