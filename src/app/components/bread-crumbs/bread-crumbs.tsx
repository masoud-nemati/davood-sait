import React from "react";
import Link from "next/link";
import { BreadCrumbsProps } from "./bread-crumbs.types";

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ items }) => {
    return (
        <div className="bg-[#9ebbec] py-5">
            <div className="containerD">
                <ul className="flex items-center text-xs text-[#0e1016] gap-2">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <li>
                                <Link
                                    href={item.url}
                                    className={index === 0 ? "text-shop-gray-1000" : ""}
                                >
                                    {item.label}
                                </Link>
                            </li>

                            {/* فقط بین آیتم‌ها علامت > نمایش بده */}
                            {index < items.length - 1 && (
                                <span className="text-[#8C9EC5]">›</span>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BreadCrumbs;
