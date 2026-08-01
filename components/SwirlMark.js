export default function SwirlMark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
    >
      <div className="h-[560px] w-[560px] animate-slow-spin rounded-full swirl-glow" />
    </div>
  );
}
