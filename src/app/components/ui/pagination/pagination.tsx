"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PaginationProps } from "./pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  activePage,
  itemPerPage,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalItems / itemPerPage);
  if (totalPages <= 1) return null;

  const hrefFor = (page: number) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (page <= 1) sp.delete("page");
    else sp.set("page", String(page));
    const qs = sp.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination flex justify-center my-8">
      <div className="flex items-center gap-2">
        
        {/* دکمه قبلی */}
        {activePage > 1 && (
          <Link
            href={hrefFor(activePage - 1)}
            scroll={false}
            className="flex size-9 items-center justify-center rounded-md  text-sm hover:bg-gray-100"
          >
            &lt;
          </Link>
        )}

        {/* شماره صفحات */}
        {pages.map((pageNumber) => {
          const isActive = activePage === pageNumber;
          return (
            <Link
              key={pageNumber}
              href={hrefFor(pageNumber)}
              scroll={false}
              className={`flex size-9 items-center justify-center rounded-md border text-sm transition 
                ${isActive ? "bg-orange-500 text-white border-orange-500" : "hover:bg-gray-100"}
              `}
            >
              {pageNumber}
            </Link>
          );
        })}

        {/* دکمه بعدی */}
        {activePage < totalPages && (
          <Link
            href={hrefFor(activePage + 1)}
            scroll={false}
            className="flex size-9 items-center justify-center rounded-md text-sm hover:bg-gray-100"
          >
            &gt;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
