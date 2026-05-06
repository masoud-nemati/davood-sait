// export interface IBlogCardProps  {
//     id:string
//     srcImage: string
//     label: string
//     title: string
//     date: string
//     visit_number: number
//     slug:string
//     content: string
// }

// // اول تایپ نویسنده
export type AuthorProps = {
  authorName: string;
  authorPostCount: number;
  authorStartDate?: string;
  authorProfileImage?: string;
  authorBio?: string;
};

// تایپ پایه برای کارت‌های لیست بلاگ (بدون content و author)
export interface IBlogCardProps {
  id: string;
  title: string;
  srcImage: string;
  label: string;
  date: string;
  visit_number: number;
  slug: string;
    content?: string; 
}

// تایپ کامل برای بلاگ‌هایی که صفحه جزئیات دارن (با content و author اختیاری)
export interface IBlogDetailsProps extends IBlogCardProps {
    // اختیاری، چون فقط بعضی بلاگ‌ها دارن
  author?: AuthorProps; // اختیاری
}