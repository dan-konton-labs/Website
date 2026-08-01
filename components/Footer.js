export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center font-body text-xs text-mist sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} Konton Labs. All rights reserved.</p>
        <p className="text-mist/70">Built one product at a time.</p>
      </div>
    </footer>
  );
}
