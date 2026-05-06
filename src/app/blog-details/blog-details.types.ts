import { AuthorProps } from "@/app/components/blogs/author/author.types";

export interface IBlogCardProps {
  id?: string;
  title: string;
  slug: string;
  srcImage?: string;
  label?: string;
  date?: string;
  visit_number?: number;
}

// ✅ تایپ مخصوص صفحه جزئیات
export interface IBlogDetailsProps extends IBlogCardProps {
  content: string;
  readingTime?: number;
  author?: AuthorProps;
}