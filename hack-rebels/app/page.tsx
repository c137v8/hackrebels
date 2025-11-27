export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Logo */}
   

        {/* Title */}
        <div className="flex justify-center mb-6">
  <img
    src="/hackrebels.svg"
    alt="Hack Rebels Logo"
    className="h-20 md:h-28 opacity-90"
  />
</div>


        {/* Subtitle */}
        <p className="text-sm font-mono text-emerald-400 mb-8">
          Shortlisted for Smart India Hackathon
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-10">
          We are a team of developers, designers, and problem solvers
          building a clean, secure, and scalable solution for the Smart India Hackathon.
        </p>

    {/* Team Section */}
<div className=" rounded-xl p-5 bg-[#000000]">

  {/* Mentor */}
  <h2 className="text-gray-300 text-xs tracking-widest uppercase font-mono mb-2">
    Mentor
  </h2>
  <p className="text-gray-400 text-sm font-mono mb-6">
    Dr. Mohammad Ahsan Chishti
  </p>

  {/* Members */}
  <h2 className="text-gray-300 text-xs tracking-widest uppercase font-mono mb-4">
    Team Members
  </h2>

  <ul className="list-none space-y-1 text-gray-400 text-sm font-mono">
    <li>Irfan — Team Lead</li>
    <li>Ibrahim — Developer</li>
    <li>Disha — Research & Content</li>
    <li>Nakul — Developer</li>
    <li>Mohit — UI/UX</li>
    <li>Ayushman — Developer</li>
  </ul>
</div>

        {/* Footer */}
        <p className="mt-10 text-[11px] text-gray-600 font-mono">
          © {new Date().getFullYear()} Hack Rebels — Ethical Innovation.
        </p>
      </div>
    </main>
  );
}
