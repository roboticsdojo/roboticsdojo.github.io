import React from "react";

type TeamsInfo = {
  name: string;
  comment: string;
  leader: LeaderInfo;
  members: MemberInfo[];
};

type TeamsRepInfo = {
  name: string;
  comment: string;
  remark: string;
  leader: LeaderInfo;
  members: MemberInfo[];
};

type LeaderInfo = {
  name: string;
  department: string;
  image: string;
};

type MemberInfo = {
  name: string;
  department: string;
  image: string;
};

const Teams2025 = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "KNIGHTS",
      comment: "Human Inspiration, Robotic Precision",
      leader: {
        name: "Gareth Kipkoech",
        department: "JKUAT Mechatronics, 4th",
        image: "gareth_kipkoech",
      },
      members: [
        {
          name: "Dismas Karimi",
          department: "JKUAT Mechatronics, 4th",
          image: "dismas",
        },
        {
          name: "Fundi Brian",
          department: "JKUAT Mechatronics, 4th",
          image: "fundi_brian",
        },
        {
          name: "Amos Owino",
          department: "JKUAT Mechatronics, 4th",
          image: "amos_owino",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ],
    },
    {
      name: "Limit Breakers",
      comment: "Excited to learn, build, and compete at our best",
      leader: {
        name: "Nathan Kingori Machira",
        department: "JKUAT Electronics and computer engineering, 5th",
        image: "nathan_kingori",
      },
      members: [
        {
          name: "Idris Nasir Jacob",
          department: "JKUAT Electronics and computer engineering, 5th",
          image: "idris",
        },
        {
          name: "Mohamed Ibrahim Tuke",
          department: "JKUAT Electronics and computer engineering, 5th",
          image: "tuke",
        },
        {
          name: "Junior Iregi Mwenja",
          department: "JKUAT Electrical and electronics engineering, 3rd",
          image: "junior",
        },
        {
          name: "Brumley Ogari",
          department: "JKUAT Electrical and Electronics engineering, 3rd",
          image: "brumley",
        },
      ],
    },
    {
      name: "Robosync",
      comment: "We code, We innovate, We build, We push boundaries.",
      leader: {
        name: "Shalom Kiptanui Jepkosgei",
        department: "JKUAT Mechatronics, 3rd",
        image: "shalom",
      },
      members: [
        {
          name: "Annette Elizabeth Oundo",
          department: "JKUAT Mechatronics, 3rd",
          image: "annette",
        },
        {
          name: "Lennox Kinyua",
          department: "JKUAT Mechatronics, 3rd",
          image: "lennox",
        },
        {
          name: "Bakita Omwenga",
          department: "JKUAT Mechatronics, 3rd",
          image: "bakita",
        },
        {
          name: "Beverly Lasoi",
          department: "JKUAT Mechatronics, 3rd",
          image: "beverly",
        },
      ],
    },
    {
      name: "Tetsuzakura Knights🌸",
      comment: "Driven by passion, built for excellence, engineered to win.",
      leader: {
        department: "JKUAT Mechanical Engineering, 2nd",
        name: "John Khaemba Sumba",
        image: "john_sumba",
      },
      members: [
        {
          name: "Prudence Nduta Njoroge",
          department: "JKUAT Mechanical Engineering, 2nd",
          image: "prudence",
        },
        {
          name: "Glenn Kanyi Gatiba ",
          department: "JKUAT Mechatronics, 4th",
          image: "glenn",
        },
        {
          name: "Allen Kizito Wachio",
          department: "JKUAT Mechatronics, 4th",
          image: "allen",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ],
    },
    {
      name: "Automated Architects ",
      comment: "We came, we saw, we programmed, and tasks were automated",
      leader: {
        name: "Abraham Winston ",
        department: "JKUAT Electrical and Electronics Engineering, 3rd",
        image: "abraham",
      },
      members: [
        {
          name: "Cephas Nyongesa",
          department: "JKUAT Electrical and Electronics Engineering, 3rd",
          image: "cephas",
        },
        {
          name: "Basil Karanja Karenjo",
          department: "JKUAT Electrical and Electronics Engineering, 3rd",
          image: "basil",
        },
        {
          name: "George Odhiambo",
          department: "JKUAT Electrical and Electronic Engineering, 3rd",
          image: "george_odhiambo",
        },
        {
          name: "Simon Gitonga",
          department: "JKUAT Electrical and Electronic Engineering, 3rd",
          image: "simon_gitonga",
        },
      ],
    },
    {
      name: "Neural Knights",
      comment: "We are intelligent engineers who do everything with honour.",
      leader: {
        name: "Sandra Biaki Keya",
        department: "JKUAT Electrical and electronics engineering, 3rd",
        image: "sandra",
      },
      members: [
        {
          name: "Cherotich Faith",
          department: "JKUAT Electrical and electronics engineering, 3rd",
          image: "cherotich",
        },
        {
          name: "Collins Chemweno",
          department: "JKUAT Mechanical Engineering, 1st",
          image: "collins",
        },
        {
          name: "Stephen David Oduo ",
          department: "JKUAT Mechanical Engineering, 4th",
          image: "stephen",
        },
        {
          name: "Sylvia Njoki Waweru",
          department: "JKUAT Electrical and Electronics Engineering, 3rd",
          image: "sylvia",
        },
      ],
    },
    {
      name: "The Loose Screw Crew",
      comment: "Error 404... Defeat not found.",
      leader: {
        name: "Allan Masibo",
        department: "The University of Nairobi, Engineering, 3rd",
        image: "allan_masibo",
      },
      members: [
        {
          name: "Jordan Kisera",
          department: "The University of Nairobi, Engineering, 2nd",
          image: "jordan",
        },
        {
          name: "Kyule Musindi",
          department: "The University of Nairobi, Engineering, 2nd",
          image: "kyule",
        },
        {
          name: "Faith Kalondu",
          department: "The University of Nairobi, Engineering, 2nd",
          image: "faith",
        },
        {
          name: "Leah Chemosit",
          department: "The University of Nairobi, Engineering, 4th",
          image: "leah",
        },
      ],
    },
    {
      name: "Jabari",
      comment: "Conquer the code, champion the challenge, claim victory",
      leader: {
        name: "Jerry Kiche",
        department: "JKUAT EEE, 4th",
        image: "jerry",
      },
      members: [
        {
          name: "Clinton Sabi",
          department: "JKUAT Mechanical engineering, 4th",
          image: "clinton",
        },
        {
          name: "Nathan Waweru",
          department: "JKUAT Mechanical Engineering, 4th",
          image: "nathan_waweru",
        },
        {
          name: "Japheth Musera",
          department: "JKUAT Mechanical Engineering, 4th",
          image: "japheth_musera",
        },
        {
          name: "Ian Ndirangu",
          department: "JKUAT Electronic and Computer Engineering, 5th",
          image: "ian_ndirangu",
        },
      ],
    },
    {
      name: "404_now Found ",
      comment:
        "Tech is the best thing to happen to humanity and making it better is our responsibility. ",
      leader: {
        name: "Ian Nyangwara",
        department:
          "The Technical University of Kenya, Dip Tech Mechatronics Engineering, 3rd",
        image: "ian",
      },
      members: [
        {
          name: "Anilla wambaki",
          department: "JKUAT Mechatronics, 2nd",
          image: "anilla",
        },
        {
          name: "Allan Makwaka",
          department:
            "The Technical University of Kenya, Mechatronic Engineering, 3rd",
          image: "allan_makwaka",
        },
        {
          name: "",
          department: "",
          image: "",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ],
    },
    {
      name: "DeKUT AMR",
      comment: "Precison in motion, vision in cod",
      leader: {
        name: "Michael Machohi",
        department: "Dedan Kimathi University of Technology, Mechatronics, 5th",
        image: "michael",
      },
      members: [
        {
          name: "Brian Kiprono Samoei",
          department:
            "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "brian_kiprono",
        },
        {
          name: "Paul Migwi",
          department:
            "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "paul",
        },
        {
          name: "Zebby Arnold Akach",
          department:
            "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "zebby",
        },
        {
          name: "James Gathirwa",
          department:
            "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "james",
        },
      ],
    },
  ];

  const teamsRepInfo: TeamsRepInfo[] = [
    {
      name: "The Obsidian Order",
      comment: "Where stone meets code, nothing breaks",
      remark: "Dojo interns 2025",
      leader: {
        name: "Victoria Rotich",
        department: "JKUAT Telecommunication and Information Engineering, 4th",
        image: "victoria",
      },
      members: [
        {
          name: "Caleb Wambua",
          department: "JKUAT Physics, Control and Instrumentation, 3rd",
          image: "caleb",
        },
        {
          name: "Joshua Njau",
          department: "JKUAT Mechatronics, 3rd",
          image: "joshua",
        },
        {
          name: "Fiona Opiyo",
          department:
            "JKUAT Telecommunication and Information Engineering, 4th",
          image: "fiona",
        },
        {
          name: "Susan Wanjiru Kimani",
          department: "JKUAT Electrical and Computer Engineering, 4th",
          image: "susan",
        },
        {
          name: "Mutwa Maryanne Farida",
          department: "JKUAT Electrical and Computer Engineering, 4th",
          image: "farida",
        },
        {
          name: "Ruth Olumo",
          department: "JKUAT Electrical and Computer Engineering, 4th",
          image: "ruth",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Student teams</h2>

          <div className="card article">
            <div className="card-content">
              {teamsInfo.map((team: TeamsInfo) => {
                return (
                  <div className="tile is-ancestor box">
                    <div className="tile is-parent">
                      <article
                        className="tile is-child has-text-centered has-image-centered"
                        style={{ alignSelf: "center" }}
                      >
                        <p className="is-size-6">
                          <b>{team.name}</b>
                        </p>
                        <p className="is-size-6">
                          <i>{team.comment}</i>
                        </p>
                      </article>
                    </div>

                    <div className="tile is-parent">
                      <article className="tile is-child has-text-centered has-image-centered">
                        <figure className="image is-64x64 container">
                          <img
                            className="is-rounded"
                            src={
                              "image/team/2025/" + team.leader.image + ".webp"
                            }
                          />
                        </figure>
                        <p className="is-size-6">{team.leader.name}</p>
                        <p className="is-size-7">{team.leader.department}</p>
                        <p className="is-size-7">
                          <b>Team leader</b>
                        </p>
                      </article>
                    </div>

                    {team.members.map((member: MemberInfo) => {
                      let membersDOM;
                      if (member.name.length === 0) {
                        membersDOM = (
                          <div
                            className="tile is-parent is-hidden-mobile"
                            style={{ visibility: "hidden" }}
                          >
                            <article className="tile is-child has-text-centered has-image-centered">
                              <figure className="image is-64x64 container">
                                <img
                                  className="is-rounded"
                                  src="image/member/placeholder.webp"
                                />
                              </figure>
                              <p className="is-size-6"></p>
                              <p className="is-size-7"></p>
                            </article>
                          </div>
                        );
                      } else {
                        membersDOM = (
                          <div className="tile is-parent">
                            <article className="tile is-child has-text-centered has-image-centered">
                              <figure className="image is-64x64 container">
                                <img
                                  className="is-rounded"
                                  src={
                                    "image/team/2025/" + member.image + ".webp"
                                  }
                                />
                              </figure>
                              <p className="is-size-6">{member.name}</p>
                              <p className="is-size-7">{member.department}</p>
                            </article>
                          </div>
                        );
                      }
                      return membersDOM;
                    })}
                  </div>
                );
              })}

              {teamsRepInfo.map((team: TeamsRepInfo) => {
                let teamsRepDOM;
                teamsRepDOM = (
                  <div className="tile is-ancestor box">
                    <div className="tile is-parent">
                      <article
                        className="tile is-child has-text-centered has-image-centered"
                        style={{ alignSelf: "center" }}
                      >
                        <p className="is-size-6">
                          <b>{team.name}</b>
                        </p>
                        <p className="is-size-6">
                          <i>{team.comment}</i>
                        </p>
                        <p className="is-size-6">
                          (<b>{team.remark}</b>)
                        </p>
                      </article>
                    </div>

                    <div className="tile is-parent">
                      <article className="tile is-child has-text-centered has-image-centered">
                        <figure className="image is-64x64 container">
                          <img
                            className="is-rounded"
                            src={
                              "image/team/2025/" + team.leader.image + ".webp"
                            }
                          />
                        </figure>
                        <p className="is-size-6">{team.leader.name}</p>
                        <p className="is-size-7">{team.leader.department}</p>
                        <p className="is-size-7">
                          <b>Team leader</b>
                        </p>
                      </article>
                    </div>

                    {team.members.map((member: MemberInfo) => {
                      let membersDOM;
                      if (member.name.length === 0) {
                        membersDOM = (
                          <div
                            className="tile is-parent is-hidden-mobile"
                            style={{ visibility: "hidden" }}
                          >
                            <article className="tile is-child has-text-centered has-image-centered">
                              <figure className="image is-64x64 container">
                                <img
                                  className="is-rounded"
                                  src="image/member/placeholder.webp"
                                />
                              </figure>
                              <p className="is-size-6"></p>
                              <p className="is-size-7"></p>
                            </article>
                          </div>
                        );
                      } else {
                        membersDOM = (
                          <div className="tile is-parent">
                            <article className="tile is-child has-text-centered has-image-centered">
                              <figure className="image is-64x64 container">
                                <img
                                  className="is-rounded"
                                  src={
                                    "image/team/2025/" + member.image + ".webp"
                                  }
                                />
                              </figure>
                              <p className="is-size-6">{member.name}</p>
                              <p className="is-size-7">{member.department}</p>
                            </article>
                          </div>
                        );
                      }
                      return membersDOM;
                    })}
                  </div>
                );
                return teamsRepDOM;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams2025;
