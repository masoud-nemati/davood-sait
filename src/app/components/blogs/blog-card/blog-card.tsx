import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IBlogCardProps } from './blog-card.types'

export const BlogCard: React.FC<IBlogCardProps> = ({
  srcImage,
  title,
  date,
  visit_number,
  slug,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex w-[319px] flex-col gap-y-3 rounded-md bg-zinc-900 p-3 border border-zinc-800 hover:border-yellow-400 transition"
    >
      {/* img */}
      <div className="relative h-[186px] w-full overflow-hidden rounded-md">
        <Image
          src={srcImage}
          alt="blogImage"
          fill
          sizes="(max-width: 768px) 100vw, 319px"
          className="object-cover"
        />
      </div>

      {/* title */}
      <h4 className="px-1 text-2xl text-white hover:text-yellow-400 transition">
        {title}
      </h4>

      {/* meta */}
      <div className="flex gap-5 px-1 text-xs text-zinc-400">
        <span>{date}</span>
        <span>
          {visit_number} <span>Mins read</span>
        </span>
      </div>
    </Link>
  )
}