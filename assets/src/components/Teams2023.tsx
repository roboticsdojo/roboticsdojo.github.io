import React from "react";
import TeamCard, { TeamInfo } from "./TeamCard";

const Teams2023 = () => {
  const teams: TeamInfo[] = [
    {
      name: "Limit breakers",
      comment: "Driven by passion, we embrace every challenge",
      leader: { name: "Evans Muema", department: "JKUAT BSc, EEE 5th", image: "evans_muema" },
      members: [
        { name: "Mohamed Ibrahim Tuke", department: "JKUAT BSc, EEE 3rd", image: "mohamed_ibrahim" },
        { name: "Nathan Kingori Machira", department: "JKUAT BSc, EEE 3rd", image: "nathan_kingori" },
        { name: "Nasir Jacob", department: "JKUAT, EEE 3rd", image: "nasir_jacob" },
        { name: "Obed Wambugu Gakui", department: "JKUAT, MT 4th", image: "obed_wambugu" },
      ],
    },
    {
      name: "Wajuzi bots",
      comment: "Where technology dances with imagination, extraordinary awaits",
      leader: { name: "Lusaka Timothy", department: "JKUAT BSc, EEE 4th", image: "lusaka_timothy" },
      members: [
        { name: "Peace Victor Kipsang", department: "JKUAT BSc, EEE 5th", image: "peace_victor" },
        { name: "Diana Koech", department: "JKUAT BSc, EEE 4th", image: "diana_koech" },
        { name: "Joshua Hynes Wambui", department: "JKUAT BSc, EEE 4th", image: "joshua_hynes" },
        { name: "Edwin Mburu", department: "JKUAT BSc, EEE 4th", image: "edwin_mburu" },
      ],
    },
    {
      name: "Robosapien",
      comment: "Ready to learn and win",
      leader: { name: "Mohamed Hashir Hussein", department: "JKUAT BSc, MT 5th", image: "mohamed_hashir" },
      members: [
        { name: "Sameel Ravji Halai", department: "JKUAT BSc, MT 5th", image: "sameel_ravji" },
        { name: "Gavins Maragia", department: "JKUAT BSc, MT 5th", image: "gavins_maragia" },
        { name: "Caren Agala", department: "JKUAT BSc, MT 5th", image: "caren_agala" },
        { name: "Gloria Chepngeno", department: "JKUAT BSc, MT 5th", image: "gloria_chepngeno" },
      ],
    },
    {
      name: "The Actuator Circuits",
      comment: "Charged up, Geeked out, Circuit-jesters forging Futuristic Wonders!",
      leader: { name: "Daniel Maithya", department: "JKUAT BSc, EEE 3rd", image: "daniel_maithya" },
      members: [
        { name: "Cynthia Chepkurui", department: "JKUAT BSc, EEE 3rd", image: "cynthia_chepkurui" },
        { name: "Stacy Kibarak", department: "JKUAT BSc, EEE 4th", image: "stacy_kibarak" },
        { name: "Samuel Njau", department: "JKUAT BSc, EEE 4th", image: "samuel_njau" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "The falcon",
      comment: "Driven by technology, Passion to build and innovate.",
      leader: { name: "Abdiwahid Guhad Muhammad", department: "JKUAT BSc, TIE 4th", image: "abdiwahid" },
      members: [
        { name: "Abdimajid Abdirashid Dahir", department: "JKUAT BSc, TIE 4th", image: "abdimajid" },
        { name: "Ahmed Rhoble", department: "JKUAT BSc, EEE 4th", image: "ahmed_rhoble" },
        { name: "Reinhard Kiptoo", department: "JKUAT BSc, ECE 4th", image: "reinhard_kiptoo" },
        { name: "Jerry Joseph Mumo", department: "JKUAT BSc, ECE 4th", image: "jerry_joseph" },
      ],
    },
    {
      name: "Minotaur",
      comment: "At the heart of things hastening singularity!",
      leader: { name: "Frandel Wanjawa", department: "JKUAT BSc, EEE 4th", image: "frandel_wanjawa" },
      members: [
        { name: "Adrian Sim Towett", department: "JKUAT BSc, EEE 5th", image: "adrian_sim" },
        { name: "Collins Mmasaba", department: "JKUAT BSc, TIE 4th", image: "collins_mmasaba" },
        { name: "Basil Khamala", department: "JKUAT BSc, EEE 4th", image: "basil_khamala" },
        { name: "Esther Wamaitha", department: "JKUAT BSc, EEE 4th", image: "esther_wamaitha" },
      ],
    },
    {
      name: "Ravenclaw",
      comment: "Embrace Unity, Ignite Innovation, Triumph Together – Conquer Glory!",
      leader: { name: "Catherine Kabura", department: "JKUAT BSc, TIE 4th", image: "catherine_kabura" },
      members: [
        { name: "Patrick Maina Njuru", department: "JKUAT BSc, EEE 3rd", image: "patrick_maina" },
        { name: "Karen Chepngeno", department: "JKUAT BSc, TIE 4th", image: "karen" },
        { name: "Erick Gitonga", department: "JKUAT BSc, ECE 4th", image: "erick_gitonga" },
        { name: "Samson Mong'are", department: "JKUAT BSc, TIE 4th", image: "samson_mongare" },
      ],
    },
    {
      name: "Tech Titans United",
      comment: "Driven to Innovate, Together We Thrive!",
      leader: { name: "Fanuel Nabiswa", department: "JKUAT BSc, Physics 3rd", image: "fanuel_nabiswa" },
      members: [
        { name: "Victoria Rotich", department: "JKUAT BSc, TIE 3rd", image: "victoria_rotich" },
        { name: "Barbra Gitonga", department: "JKUAT BSc, ECE 4th", image: "barbra_gitonga" },
        { name: "Bett Collins", department: "JKUAT BSc, MT 4th", image: "bett_collins" },
        { name: "Philip Shawn", department: "JKUAT BSc, ECE 4th", image: "philip_shawn" },
      ],
    },
    {
      name: "Marcus",
      comment: "Building dance partners for humans with two left feet",
      leader: { name: "Njuguna Martin", department: "JKUAT BSc, SOMMME 5th", image: "njuguna_martin" },
      members: [
        { name: "Keith Muinde", department: "JKUAT BSc, SOMMME 5th", image: "keith_muinde" },
        { name: "Dennis Karanga", department: "JKUAT BSc, SOMMME 4th", image: "dennis_karanga" },
        { name: "Geoffrey Maragia Nyakagwa", department: "JKUAT BSc, SOMMME 5th", image: "geoffrey_maragia" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Phoenix",
      comment: "Keep on insisting",
      remark: "Runner-up team in Dojo competition 2022",
      leader: { name: "Brian Macharia", department: "JKUAT BSc, MT 3rd", image: "brian_macharia" },
      members: [
        { name: "Hazel Nyaruai", department: "JKUAT BSc, MT 3rd", image: "hazel_nyaruai" },
        { name: "Robinlee Mwangi", department: "JKUAT BSc, MT 3rd", image: "robinlee_mwangi" },
        { name: "Glenn Kanyi", department: "JKUAT BSc, MT 3rd", image: "glenn_kanyi" },
        { name: "Emmanuel Kamau", department: "JKUAT BSc, MT 3rd", image: "emmanuel_kamau" },
      ],
    },
    {
      name: "Spark",
      comment: "Standard of Measure",
      remark: "Dojo 2023 interns",
      leader: { name: "Lenny Ng'ang'a", department: "JKUAT BSc, Physics 4th", image: "lenny_nganga" },
      members: [
        { name: "Kennedy Wahome", department: "JKUAT BSc, EEE 3rd", image: "kennedy_wahome" },
        { name: "Judy Wangechi", department: "JKUAT BSc, EEE 3rd", image: "judy_wangechi" },
        { name: "Mirriam Mogeni", department: "JKUAT, EEE 3rd", image: "mirriam_mogeni" },
        { name: "Faith Ngina", department: "JKUAT, EEE 3rd", image: "faith_ngina" },
        { name: "Eric Mwangi", department: "JKUAT, MT 4th", image: "eric_mwangi" },
        { name: "Mwaura Mbugua", department: "JKUAT, EEE 5th", image: "mwaura_mbugua" },
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
              <TeamCard key={team.name + i} team={team} imageBasePath="image/team/2023/" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams2023;
