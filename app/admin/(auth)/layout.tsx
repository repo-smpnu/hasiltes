// Auth group layout - NO sidebar, standalone page
export default function AuthGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
