import Navbar from './_components/navbar';

export default function DashboardkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-full'>
      <Navbar />
      {children}
    </div>
  );
}
