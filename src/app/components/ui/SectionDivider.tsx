type Props = {
  title: string
}

export default function SectionDivider({ title }: Props) {
  return (
    <div className="my-12 flex items-center gap-4">

      {/* line */}
      <div className="flex-1 h-px bg-white/20" />

      {/* title */}
      <h2 className="text-sm md:text-base text-gray-300 uppercase tracking-widest">
        {title}
      </h2>

      {/* line */}
      <div className="flex-1 h-px bg-white/20" />

    </div>
  )
}