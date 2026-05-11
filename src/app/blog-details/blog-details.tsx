import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@/app/components/ui/icons/icons";
import { FC } from "react";
import { IBlogDetailsProps } from "./blog-details.types";
import Tag from "@/app/components/ui/tag/tag";
import Author from "@/app/components/blogs/author/author";
import styles from "./article.module.css";

const BlogDetailsComponent: FC<IBlogDetailsProps> = (props) => {
  const { srcImage, label, title, content, author } = props;

  return (
    <>
      {/* blog title & details */}
      <section className="containerD my-6 md:my-10">
        <div>
          <Tag tag_title={label ??""} />

          {/* blog title */}
          <h1
            className="
    mb-4 pr-5 md:mb-6 mt-3 md:mt-4
    text-2xl md:text-3xl lg:text-4xl
    font-bold leading-tight text-right
    text-[color:var(--fg)]
  "
          >
            {title}
          </h1>


          {/* author (top - desktop only) */}
          {author && (
            <div className="hidden md:flex items-center gap-4 mt-6">
              <Author
                authorName={author.authorName}
                authorPostCount={author.authorPostCount}
                authorStartDate={author.authorStartDate}
                authorProfileImage={author.authorProfileImage}
                authorBio={author.authorBio}
                variant="minimal"
              />
            </div>
          )}
        </div>
      </section>

      {/* blog image */}
      <section className="containerD my-6 md:my-8">
        {srcImage && (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={srcImage} 
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        )}
      </section>

      {/* blog content */}
      <section dir="rtl" className="containerD my-12">
        <article
          className="
            blog-content
            text-slate-700 dark:text-slate-200
          "
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: content ?? "" }}
        />
      </section>

      {/* divider */}
      <div className="containerD my-8 border-t border-slate-200 dark:border-slate-700" />

      {/* author bottom */}
      {author && (
        <section className="containerD pb-8">
          <Author
            authorName={author.authorName}
            authorPostCount={author.authorPostCount}
            authorStartDate={author.authorStartDate}
            authorProfileImage={author.authorProfileImage}
            authorBio={author.authorBio}
            variant="default"
          />
        </section>
      )}

      {/* back button */}
      <section className="containerD py-8 md:py-12">
        <div className="flex justify-start">
          <Link
            href="/blog"
            className="
              inline-flex items-center gap-3
              px-6 py-3
              text-sm md:text-base font-medium
              text-slate-700 dark:text-slate-200
              bg-gray-100 dark:bg-gray-800
              hover:bg-gray-200 dark:hover:bg-gray-700
              rounded-xl
              transition-all duration-200
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              dark:focus:ring-offset-gray-900
            "
          >
            <IconArrowLeft className="w-5 h-5" />
            <span></span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;
