type ArchivePlaceholderProps = {
  label: string;
  number: number;
};

export function ArchivePlaceholder({ label, number }: ArchivePlaceholderProps) {
  return (
    <div className="archive-placeholder" role="img" aria-label={`${label} placeholder`}>
      <span>{String(number).padStart(2, "0")}</span>
      <span>Image material pending</span>
    </div>
  );
}
