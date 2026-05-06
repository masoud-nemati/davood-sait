export default function AboutSkills() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        Skills & Expertise
      </h3>

      {/* LIST */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

        <ul className="space-y-3 text-gray-300">

          <li className="flex items-center gap-2">
            <span className="text-blue-400">▸</span>
            CO2 Welding
          </li>

          <li className="flex items-center gap-2">
            <span className="text-blue-400">▸</span>
            Argon Welding
          </li>

          <li className="flex items-center gap-2">
            <span className="text-blue-400">▸</span>
            Laser Welding
          </li>

          <li className="flex items-center gap-2">
            <span className="text-blue-400">▸</span>
            Christian Theology
          </li>

          <li className="flex items-center gap-2">
            <span className="text-blue-400">▸</span>
            Editor
          </li>

        </ul>

      </div>

    </section>
  )
}