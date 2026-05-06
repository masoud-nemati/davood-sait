import { fetchBlogBySlug, BlogsData } from '@/data/blogs.data';
import { notFound } from 'next/navigation';
import BlogDetailsComponent from '@/app/blog-details/blog-details';
import BreadCrumbs from '@/app/components/bread-crumbs/bread-crumbs';
import { BreadCrumbItem } from '@/app/components/bread-crumbs/bread-crumbs.types';
import styles from "./article.module.css";

// ✅ تعریف تایپ
interface IBlog {
  title: string;
  slug: string;
  content: string;

  tag_type?: string;
  discount?: number;
  rate?: number;
  ratersNumber?: number;
}

// ✅ مهم‌ترین قسمت برای export
export async function generateStaticParams() {
  return BlogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ صفحه
export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {

  const { slug } = await params;

  const blog = await fetchBlogBySlug(slug);


  if (!blog) return notFound();

  const breadcrumbItems: BreadCrumbItem[] = [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog" },
    { label: blog.title, url: `/blog/${blog.slug}` }
  ];

return (
  <div className={styles.container}>
    <BreadCrumbs items={breadcrumbItems} />

    <div className={styles.wrapper}>
      <BlogDetailsComponent
        {...blog}
        content={blog.content || ""}
        author={blog.author as import('@/app/components/blogs/author/author.types').AuthorProps}
      />
    </div>
  </div>
);
}
