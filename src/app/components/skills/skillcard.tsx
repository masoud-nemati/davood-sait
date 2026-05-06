"use client";

import Image from "next/image";
import styles from "./skills.module.css";

type SkillCardProps = {
  name: string;
  level: number;
  logo: string;
};

export default function SkillCard({ name, level, logo }: SkillCardProps) {
  return (
    <div
      className={`${styles.skillCard}
   bg-zinc-900 border-slate-200 text-slate-900
    dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100
    hover:shadow-lg
    dark:hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]
  `}
    >
      {/* wrapper برای آیکن */}
      <div
        className={`${styles.skillLogo}
      bg-sky-500/10
      dark:bg-sky-400/10
    `}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          width={32}
          height={32}
        />
      </div>

      <span className={styles.skillName}>{name}</span>

      <meter
        className={`${styles.meter}
      bg-slate-200 dark:bg-slate-800
    `}
        value={level}
        min={0}
        max={100}
      />

      <span
        className={`${styles.skillLevel}
      text-slate-600 dark:text-slate-400
    `}
      >
        {level}%
      </span>
    </div>

  );
}
