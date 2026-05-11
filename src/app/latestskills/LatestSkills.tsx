import SkillCard from "@/app/components/skills/skillcard";
import {
  programmingSkills,
  industrialSkills,
} from "@/data/skills.data";

export default function LatestSkills() {
  const allSkills = [...programmingSkills, ...industrialSkills];
  const latestSkills = allSkills.slice(0, 4);

  return (
    <section className="bg-black text-white px-6">
      {/* title */}
      <div className="flex flex-col gap-2 border-b border-zinc-700 pb-5">
        <h2 className="text-3xl font-bold text-yellow-400">
          My Skills
        </h2>
        <span className="text-md text-zinc-400">
          What I’m good at
        </span>
      </div>

      {/* cards */}
      <div className="mt-9 flex w-full flex-wrap justify-center gap-5">
        {latestSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}