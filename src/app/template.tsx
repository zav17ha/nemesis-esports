/** Runs on every route change: a quick red sweep and a soft fade-up, in pure CSS. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        aria-hidden
        className="anim-sweep pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-red-400 to-primary"
      />
      <div className="anim-fade-up" style={{ animationDuration: "0.5s" }}>
        {children}
      </div>
    </>
  );
}
