import { Plus } from 'lucide-react';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import MobileSidebar from './mobile-sidebar';

export default function Navbar() {
  return (
    <nav className='fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center justify-between'>
      <div className='flex items-center gap-x-4'>
        <MobileSidebar />
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button
          size='sm'
          className='rounded-sm hidden md:flex h-auto py-1.5 px-2'
        >
          Create
        </Button>
        <Button size='sm' className='rounded-sm flex md:hidden'>
          <Plus className='w-4 h-4' />
        </Button>
      </div>
      <div className='flex items-center gap-x-2 '>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='/select-org'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
}
