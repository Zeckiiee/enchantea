export default function PageTransition({ children, pathname }) {
  return (
    <div key={pathname} className="page-shell">
      {children}
    </div>
  );
}
