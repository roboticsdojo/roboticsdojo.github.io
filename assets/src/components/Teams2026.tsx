import React from "react";
import TeamCard, { TeamInfo } from "./TeamCard";

const Teams2026 = () => {
  const teams: TeamInfo[] = [
    {
      name: "Limit Breakers",
      comment:
        "We treat constraints as a challenge, not a conclusion.",
      leader: { name: "Ogari Brumley Mogaka", department: "JKUAT Electrical and Electronic Engineering", image: "brumley_mogaka" },
      members: [
        { name: "Iregi Junior Mwenja", department: "JKUAT Electrical and Electronic Engineering", image: "iregi_junior" },
        { name: "Gideon Juma Mosomi", department: "JKUAT Electrical and Electronic Engineering", image: "gideon_juma" },
        { name: "James Ndirangu", department: "JKUAT Mechatronics Engineering", image: "james_ndirangu" },
        { name: "Victor Kinyua", department: "JKUAT Mechatronics Engineering", image: "victor_kinyua" },
      ],
    },
    {
      name: "Malkiabots",
      comment: "Code. Create. Slay.",
      leader: { name: "Mercy Bagaka Murimi", department: "UoN Electrical and Electronics Engineering", image: "mercy_bagaka-murimi" },
      members: [
        { name: "Lyn Kamau", department: "UoN Electrical and Electronics Engineering", image: "lyn_kamau" },
        { name: "Joy Anyango", department: "UoN Electrical and Electronics Engineering", image: "joy_anyango" },
        { name: "Melisa Kinda", department: "UoN Electrical and Electronics Engineering", image: "melisa_kinda" },
        { name: "Jordana Owilla", department: "UoN Electrical and Electronics Engineering", image: "jordana_owilla" },
      ],
    },
    {
      name: "Asterix",
      comment: "Building the future",
      leader: { name: "Steve Muvui", department: "JKUAT Mechatronics", image: "steve_muvui" },
      members: [
        { name: "Anilla Wambui", department: "JKUAT Mechatronics Engineering", image: "anilla_wambui" },
        { name: "Andrew Muchangi", department: "JKUAT Mechatronics Engineering", image: "andrew_muchangi" },
        { name: "Jimmy Kimeu", department: "JKUAT Mechatronics Engineering", image: "jimmy_kimeu" },
        { name: "Ibrahim Gichemba", department: "JKUAT Mechatronics Engineering", image: "ibrahim_gichemba" },
      ],
    },
    {
      name: "TetsuZakura Knights🌸",
      comment: "Sakura Spirit",
      leader: { name: "Joshua Njau", department: "JKUAT Mechatronics", image: "joshua_njau" },
      members: [
        { name: "John Sumba", department: "JKUAT Mechanical Engineering", image: "john_sumba" },
        { name: "Prudence Njoroge", department: "JKUAT Mechanical Engineering", image: "prudence_njoroge" },
        { name: "Allen Kizito", department: "JKUAT Mechatronic Engineering", image: "allen_kizito" },
        { name: "Alvin Gamba", department: "JKUAT Mechatronic Engineering", image: "alvin_gamba" },
      ],
    },
    {
      name: "NOMAD",
      comment: "Masterless movement, uncharted navigation.",
      leader: { name: "Nathan Simintei Kaelo", department: "DeKUT Mechatronics", image: "nathan_simintei-kaelo" },
      members: [
        { name: "Muthomi Kioni", department: "DeKUT Mechatronics", image: "muthomi_kioni" },
        { name: "Reinhard Bitok", department: "DeKUT Mechatronics", image: "reinhard_bitok" },
        { name: "Mark Kitur", department: "DeKUT Mechatronics", image: "mark_kitur" },
        { name: "Emmanuel Wambua", department: "DeKUT Mechatronics", image: "emmanuel_wambua" },
      ],
    },
    {
      name: "jnnp robotics innovators",
      comment: "Focusing on innovation, automation and dominate",
      leader: { name: "Jane Kabuchi Maina", department: "Jeremiah Nyaga National Polytechnic, Electrical", image: "jane_kabuchi-maina" },
      members: [
        { name: "Morris Wachira Mwaniki", department: "Jeremiah Nyaga National Polytechnic, Electrical", image: "morris_wachira-mwaniki" },
        { name: "Francisco Mbugua Ngigi", department: "Jeremiah Nyaga National Polytechnic, Electrical and Electronics", image: "francisco_mbugua_ngigi" },
        { name: "", department: "", image: "" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Eigen",
      comment: "Inherent Precision, Invariant Purpose",
      leader: { name: "Victoria Rotich", department: "JKUAT Telecommunication and Information Engineering", image: "victoria_rotich" },
      members: [
        { name: "Shalom Kiptanui", department: "JKUAT Mechatronics", image: "shalom_kiptanui" },
        { name: "Collins Chemweno", department: "JKUAT Aerospace Engineering", image: "collins_chemweno" },
        { name: "Rimax Wafula Mudhune", department: "JKUAT Physics", image: "rimax_wafula" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Auracle",
      comment: "Map. Think. Move.",
      leader: { name: "Frederick Wanjeri", department: "JKUAT Mechatronics", image: "fred" },
      members: [
        { name: "Amy Kibara", department: "JKUAT Mechatronics", image: "amy" },
        { name: "Emmanuel Mututa", department: "JKUAT Mechatronics", image: "emmanuel" },
        { name: "Jacque Kyalo", department: "JKUAT Electrical and Electronic Engineering", image: "jacque" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Zingira",
      comment: "Build in Kenya. Engineered for impact.",
      leader: { name: "Dickson Kabiru", department: "JKUAT Physics", image: "dickson" },
      members: [
        { name: "Joan Ouma", department: "JKUAT Electronic and Computer Engineering", image: "joan" },
        { name: "Nikita Kamau", department: "JKUAT Telecommunication and Information Engineering", image: "nikita" },
        { name: "Lewis Karani", department: "KU Biomedical Engineering", image: "kibe" },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "Saifee robotics",
      comment: "Innovate, Build, Conquer",
      leader: { name: "Burhanuddin Hardwarewala", department: "Aljamea-Tus-Saifiyah", image: "burhanuddin_hardwarewala" },
      members: [
        { name: "Murtaza Leelwala", department: "Aljamea-Tus-Saifiyah", image: "murtaza_leelwala" },
        { name: "Hamza Bharmal", department: "Aljamea-Tus-Saifiyah", image: "hamza_bharmal" },
        { name: "Ali asgher Simari", department: "Aljamea-Tus-Saifiyah", image: "ali_asgher_simari" },
        { name: "Ibrahim deesawala", department: "Aljamea-Tus-Saifiyah", image: "ibrahim_deesawala" },
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
              <TeamCard key={team.name + i} team={team} imageBasePath="image/team/2026/" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams2026;
