import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex fixed items-center top-0 w-full h-14 px-4 border-b shadow-sm bg-white'>
      <div className='md:max-w-screen-2xl mx-auto flex w-full justify-between items-center'>
        <Logo />
        <div className='space-x-3 w-full flex items-center justify-between md:w-auto'>
          <Button size='sm' variant='outline' asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/sign-up'>Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
