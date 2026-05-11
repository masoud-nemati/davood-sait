export default function AboutNow() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Now
      </h3>

      {/* CARD */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

        {/* TOP LABEL */}
        <p className="text-gray-400 text-sm">
          Working at
        </p>

        {/* ITEMS */}
        <div className="space-y-3 text-gray-300">

          <p>
            <span className="text-blue-400 font-semibold">
              Townlit Company
            </span>
          </p>

          <p>
            <span className="text-blue-400 font-semibold">
              Welding Company
            </span>
          </p>

          <p>
            <span className="text-blue-400 font-semibold">
              Programming Student
            </span>
          </p>

          <p>
            <span className="text-blue-400 font-semibold">
              Theology Student
            </span>
          </p>

        </div>

      </div>

    </section>
  )
}