export const dynamic = "force-static";

import { BLOGS_PER_PAGE } from '@/configs/itemsPerPage';
import { BlogsData } from '@/data/blogs.data';
import { BreadCrumbItem } from '@/app/components/bread-crumbs/bread-crumbs.types';
import AllBlogs from '@/app/components/blogs/all-blogs/all-blogs';
import BigBanner from '@/app/components/big-banner/big-banner';
import BreadCrumbs from '@/app/components/bread-crumbs/bread-crumbs';
import Pagination from '@/app/components/ui/pagination/pagination';
import styles from "./article.module.css";
type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Blog({ searchParams }: Props) {
  const breadcrumbItems: BreadCrumbItem[] = [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog" }
  ];

  const blogsPerPage = BLOGS_PER_PAGE;

  const pageParam = searchParams?.page;
  const activePage =
    typeof pageParam === "string" ? Number(pageParam) : 1;

  const startIndex = (activePage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const visibleBlogs = BlogsData.slice(startIndex, endIndex);

  return (
    <>
      <section>
        <BreadCrumbs items={breadcrumbItems} />
      </section>

      <section>
        <AllBlogs visibleBlogs={visibleBlogs} />
      </section>

      <section className="containerD my-6 p-2">
        <Pagination
          totalItems={BlogsData.length}
          activePage={activePage}
          itemPerPage={blogsPerPage}
        />
      </section>

      <section className="!mx-0 !w-full bg-green-200 !px-0">
        <BigBanner />
      </section>
    </>
  );
}