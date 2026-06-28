import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
};

export function ProjectImage({ src, alt, className = "", preload = false }: ProjectImageProps) {
  return (
    <div className={`project-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) calc(100vw - 32px), calc(100vw - 64px)"
        preload={preload}
      />
    </div>
  );
}
