import Navbar from './_components/navbar';

export default function DashboardkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <Navbar />
      {children}
    </div>
  );
}
