export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Dashboard Layout</h1>
      {children}
    </section>
  );
}
