/** Marks content you still need to supply. Only rendered when NEXT_PUBLIC_SHOW_PLACEHOLDERS is "true". */
export default function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
      <span className="font-semibold">Placeholder, replace with real content: </span>
      {children}
    </div>
  );
}
