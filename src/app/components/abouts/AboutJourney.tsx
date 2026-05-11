export default function AboutJourney() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-6 group">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-white text-center transition-all duration-300 group-hover:tracking-wider">
        My Journey
      </h2>

      {/* CARD */}
      <div
        className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-6
          space-y-5
          leading-relaxed
          text-gray-300
          transition-all duration-300
          group-hover:scale-[1.01]
          group-hover:shadow-xl
          group-hover:border-blue-500/30
        "
      >

        <p className="transition-all duration-300 group-hover:text-gray-100 group-hover:scale-[1.01]">
          Programming is my passion, and{" "}
          <span className="text-blue-400 font-semibold">
            I love it and am constantly striving to grow in coding
          </span>.
          Right now, I&apos;m diving into JavaScript, TypeScript, React, and Kotlin.
        </p>

        <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-200 group-hover:scale-[1.01]">
          God has helped me a lot and has changed my life.
        </p>

        <p className="transition-all duration-300 group-hover:text-gray-100 group-hover:scale-[1.01]">
          But above all, my family means so much to me. I live with my wonderful
          wife and our two amazing kids, and I love them more than anything.
          They are my biggest motivation to keep going.
        </p>

        <p className="transition-all duration-300 group-hover:text-gray-100 group-hover:scale-[1.01]">
          I used to live in Iran, but now I&apos;m in Turkey. Moving here has come
          with its challenges, but it has also given me the chance to learn new
          things and face new experiences.
        </p>

        <p className="transition-all duration-300 group-hover:text-gray-100 group-hover:scale-[1.01]">
          I&apos;m always eager to learn and improve my skills. My dreams are big,
          and I hope that one day, I can make a positive impact on the world
          through my work.
        </p>

      </div>
    </section>
  )
}