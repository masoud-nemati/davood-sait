// img.type.ts
import { ComponentPropsWithoutRef } from "react";

export interface ImageData extends ComponentPropsWithoutRef<"img"> {
  id?: string;

  src: string;
  alt: string;

  /** اگر داده شود → fixed size */
  width?: number;
  height?: number;

  /** اگر true باشد → fill mode */
  fill?: boolean;

  /** کنترل نسبت تصویر در حالت fill */
  ratio?:string;

  className?: string;
}
