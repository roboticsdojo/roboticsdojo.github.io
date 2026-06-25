import React from "react";
import TeamCard, { TeamInfo } from "./TeamCard";

const Teams2024 = () => {
  const teams: TeamInfo[] = [
    {
      name: "Team 0804",
      comment: "Leading from the Front",
      jointTeam: "Joint team 1",
      role: "Mobile platform",
      leader: { name: "Washington Kamadi", department: "PAUSTI MSc, Mechatronics 1st", image: "washington_kamadi" },
      members: [
        { name: "Felix Wanyoike", department: "JKUAT Mechatronics alumni, Dojo alumni", image: "felix_wanyoike" },
        { name: "Michael Kimani", department: "JKUAT mechatrnics alumni, Dojo alumni", image: "michael_kimani" },
        { name: "", department: "", image: "" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Limit Breakers",
      comment: "Innovation through determination, breaking limits with every step.",
      jointTeam: "Joint team 1",
      role: "Mobile platform/Navigation",
      leader: { name: "Mohamed Ibrahim Tuke", department: "JKUAT BSc, EEE 3rd", image: "mohamed_ibrahim" },
      members: [
        { name: "Nathan Kingori", department: "JKUAT BSc, EEE 3rd", image: "nathan_kingori" },
        { name: "Nasir Jacob Idriss", department: "JKUAT BSc, EEE 3rd", image: "nasir_jacob_idriss" },
        { name: "Obed Wambugu", department: "JKUAT BSc, Mechatronics 4th", image: "obed" },
        { name: "Leonard M. Boma", department: "JKUAT BSc, EEE 3rd", image: "leonard_boma" },
      ],
    },
    {
      name: "RoboQueens",
      comment: "RoboQueens: Together, we build, we inspire, we conquer!",
      jointTeam: "Joint team 2",
      role: "Mobile platform",
      leader: { name: "Victoria Rotich", department: "JKUAT BSc, TIE 4th", image: "victoria_rotich" },
      members: [
        { name: "Irene Yegon", department: "JKUAT BSc, TIE 4th", image: "irene_yegon" },
        { name: "Agnes Kimani", department: "JKUAT BSc, Mechanical 4th", image: "agnes_kimani" },
        { name: "", department: "", image: "" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Team Atom",
      comment: "Engineering dreams into robotic realities.",
      jointTeam: "Joint team 2",
      role: "Navigation",
      leader: { name: "Daniel Maithya", department: "JKUAT BSc, EEE 5th", image: "daniel_maithya" },
      members: [
        { name: "Stacy Kibarak", department: "JKUAT BSc, EEE 5th", image: "stacy_kibarak" },
        { name: "Samuel Njau", department: "JKUAT BSc, EEE 5th", image: "samule_njau" },
        { name: "Kelvine Chweya", department: "JKUAT BSc, EEE 5th", image: "kelvine_chweya" },
        { name: "Kings Munene", department: "JKUAT BSc, EEE 5th", image: "kings_munene" },
      ],
    },
    {
      name: "KNIGHTS",
      comment: "Engineers, ignite innovation, conquer challenges, embrace teamwork, excel!",
      jointTeam: "Joint team 3",
      role: "Mobile platform",
      leader: { name: "Amos Oniare", department: "JKUAT BSc, Mechatronics 3rd", image: "amos_oniare" },
      members: [
        { name: "Dismas Karimi", department: "JKUAT BSc, Mechatronics 3rd", image: "dismas_karimi" },
        { name: "Gareth Kipkoech", department: "JKUAT BSc, Mechatronics 3rd", image: "gareth_kipkoech" },
        { name: "Fundi Brian", department: "JKUAT BSc, Mechatronics 3rd", image: "fundi_brian" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Pentagon",
      comment: "Coding the dream, dreaming the code!",
      jointTeam: "Joint team 3",
      role: "Navigation",
      leader: { name: "Daniel Karume", department: "JKUAT BSc, Computing 2nd", image: "daniel_karume" },
      members: [
        { name: "Joseph Kirika", department: "JKUAT BSc, Computing 2nd", image: "joseph_kirika" },
        { name: "Peaches Njenga", department: "JKUAT BSc, Computing 2nd", image: "peaches_njenga" },
        { name: "Geoffrey Chege Kimani", department: "JKUAT BSc, Computing 2nd", image: "geoffrey_chege" },
        { name: "Irke Konzolo", department: "JKUAT BSc, Computing 2nd", image: "irke_konzolo" },
      ],
    },
    {
      name: "R.O.O.K Droid",
      comment: "Creating robots, inspiring futures, achieving greatness together.",
      jointTeam: "Joint team 4",
      role: "Mobile platform",
      leader: { name: "Felix Ronoh", department: "JKUAT BSc, Mechatronics 4th", image: "felix_ronoh" },
      members: [
        { name: "Collins Omariba", department: "JKUAT BSc, Mechatronics 4th", image: "collins_omariba" },
        { name: "Hillary Murimi", department: "JKUAT BSc, Mechatronics 4th", image: "hillary_murimi" },
        { name: "Jeremiah Onyapidi", department: "JKUAT BSc, Mechatronics 4th", image: "jeremiah" },
        { name: "Lukundo Okemba", department: "JKUAT BSc, Mechatronics 4th", image: "lukundo_okemba" },
      ],
    },
    {
      name: "Echo",
      comment: "Experimenting, building, and conquering challenges together",
      jointTeam: "Joint team 4",
      role: "Navigation",
      leader: { name: "Karen Chepngeno", department: "JKUAT BSc, TIE 4th", image: "karen_langat" },
      members: [
        { name: "Nindo Emmanuel", department: "JKUAT BSc, Mechatronics 4th", image: "nindo_emmanuel" },
        { name: "Matiko George Maroa", department: "JKUAT BSc, TIE 4th", image: "matiko" },
        { name: "", department: "", image: "" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Syzygy",
      comment: "In it to win it.",
      jointTeam: "Joint team 5",
      role: "Mobile platform/Navigation",
      leader: { name: "Brian Macharia", department: "JKUAT BSc, Mechatronics 4th", image: "brian_macharia" },
      members: [
        { name: "Kennedy Wahome", department: "JKUAT BSc, EEE 5th", image: "kennedy_wahome" },
        { name: "Lenny Ng'ang'a", department: "JKUAT Physics alumni, Dojo former intern & alumni", image: "lenny" },
        { name: "", department: "", image: "" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "PentaSlam",
      comment: "",
      jointTeam: "Joint team 6",
      role: "Mobile platform/Navigation",
      leader: { name: "Peter Ndiba Muigai", department: "DeKUT BSc, Mechatronics 5th", image: "peter_ndiba" },
      members: [
        { name: "Joe Albert Ngigi", department: "DeKUT BSc, Mechatronics 5th", image: "albert_ngigi" },
        { name: "Stephen Mwangi Maina", department: "DeKUT BSc, Mechatronics 5th", image: "stephen_mwangi" },
        { name: "Joan Wambui Kabura", department: "DeKUT BSc, Mechatronics 5th", image: "joan_kabura" },
        { name: "Nicholas Kamau Ng'ang'a", department: "DeKUT BSc, Mechatronics 5th", image: "nicholas_nganga" },
      ],
    },
  ];

  return (
    <section className="section">
      <div className="container has-text-centered">
        <h2 className="title">Student teams</h2>
        <div className="card article">
          <div className="card-content">
            {teams.map((team, i) => (
              <TeamCard key={team.name + i} team={team} imageBasePath="image/team/2024/" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams2024;
