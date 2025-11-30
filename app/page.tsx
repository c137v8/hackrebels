export default function Home() {
  const mentor = {
    name: "Dr. Mohammad Ahsan Chishti",
    role: "Mentor",
    description: "Our guiding light and mentor, providing expert insights and direction to the team.",
    image: "/ashan.jpg" // path from public folder
  };

  const teamMembers = [
    {
      name: "Irfan",
      role: "Team Lead",
      description: "Leads the team with a focus on planning, coordination, and implementation.",
      image: "/Irfan.jpg"
    },
    {
      name: "Ibrahim",
      role: "Developer",
      description: "Builds scalable solutions and writes clean, maintainable code.",
      image: "/Ibrahim.jpg"
    },
    {

        name: "Disha",
        role: "AI Researcher",
        description: "Focuses on AI research and ensures content is precise.",
        image: "/Disha.jpg"
      },
    {
      name: "Nakul",
      role: "Developer",
      description: "Focused on backend development and problem-solving for complex challenges.",
      image: "/Nakul.jpg"
    },
    {
      name: "Mohit",
      role: "UI/UX",
      description: "Designs user-friendly interfaces with clean, modern visuals.",
      image: "/Mohit.jpg"
    },
    {
      name: "Ayushman",
      role: "Developer",
      description: "Develops responsive and efficient code while optimizing performance.",
      image: "/Ayushman.jpg"
    }
  ];

  return (
    <main className="page-container">

    {/* FULLSCREEN LOGO SECTION */}
    <section className="hero-section">
    <img src="/hackrebels.svg" alt="Hack Rebels Logo" className="hero-logo" />
    <p className="hero-subtitle">
    Our team believes technology should feel effortless and solve real human problems. Create solutions that are intelligent, intuitive, and built with the diverse needs of India - especially the North-East - in mind.
    </p>

    <div className="scroll-indicator">
    <span>Scroll Down</span>
    <div className="mouse">
    <div className="wheel"></div>
    </div>
    </div>
    </section>

    {/* MENTOR SECTION */}
    <section className="mentor-section">
    <h2 className="section-header">Mentor</h2>
    <div className="mentor-card">
    <img src={mentor.image} alt={mentor.name} className="member-avatar-image" />
    <h3 className="member-name">{mentor.name}</h3>
    <p className="member-role">{mentor.role}</p>
    <p className="member-description">{mentor.description}</p>
    </div>
    </section>

    {/* TEAM MEMBERS SECTION */}
    <section className="team-section">
    <h2 className="section-header">Team Members</h2>
    <div className="team-grid">
    {teamMembers.map((member) => (
      <div key={member.name} className="team-member-card">
      <img src={member.image} alt={member.name} className="member-avatar-image" />
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-description">{member.description}</p>
      </div>
    ))}
    </div>
    </section>

    {/* FOOTER */}
    <footer className="footer">
    © {new Date().getFullYear()} Hack Rebels — Ethical Innovation.
    </footer>

    </main>
  );
}
