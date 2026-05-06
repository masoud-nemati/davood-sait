import SkillCard from "@/app/components/skills/skillcard";
import BreadCrumbs from "@/app/components/bread-crumbs/bread-crumbs";
import styles from "@/app/components/skills/skills.module.css";
import type { BreadCrumbItem } from "@/app/components/bread-crumbs/bread-crumbs.types";


import {
  programmingSkills,
  industrialSkills,
} from "@/data/skills.data";

const breadcrumbItems: BreadCrumbItem[] = [
  { label: "Home", url: "/" },
  { label: "Skills", url: "/skills" },
];

export default function SkillsPage() {
  return (

    <>
        <section>
        <BreadCrumbs items={breadcrumbItems} />
      </section>
    <div className={styles.skillsPage}>
      
      {/* Breadcrumbs */}
      

      <h2 className={styles.h2skill}>My Skills</h2>

      <section className={styles.skillsCategory}>
        <h3 className={styles.sectionTitle}>Programming Skills</h3>
        <div className={styles.skillsList}>
          {programmingSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      <section className={styles.skillsCategory}>
        <h3 className={styles.sectionTitle}>Industrial Skills</h3>
        <div className={styles.skillsList}>
          {industrialSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
