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
        department: "Mechatronics, 4th",
        image: "",
      },
      members: [
        {
          name: "Dismas Karimi",
          department: "Mechatronics, 4th",
          image: "",
        },
        {
          name: "Fundi Brian",
          department: "Mechatronics, 4th",
          image: "",
        },
        {
          name: "Amos Owino",
          department: "Mechatronics, 4th",
          image: "",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ]
    },
    {
      name: "Limit Breakers",
      comment: "Excited to learn, build, and compete at our best",
      leader: {
        name: "Nathan Kingori Machira",
        department: "Electronics and computer engineering, 5th",
        image: "",
      },
      members: [
        {
          name: "Idris Nasir Jacob",
          department: "Electronics and computer engineering, 5th",
          image: "",
        },
        {
          name: "Mohamed Ibrahim Tuke",
          department: "Electronics and computer engineering, 5th",
          image: "",
        },
        {
          name: "Junior Iregi Mwenja",
          department: "Electrical and electronics engineering, 3rd",
          image: "",
        },
        {
          name: "Brumley Ogari",
          department: "Electrical and Electronics engineering, 3rd",
          image: "",
        },
      ]
    },
    {
      name: "Robosync",
      comment: "We code, We innovate, We build, We push boundaries.",
      leader: {
        name: "Shalom Kiptanui Jepkosgei",
        department: "Mechatronics, 3rd",
        image: "",
      },
      members: [
        {
          name: "Annette Elizabeth Oundo",
          department: "Mechatronics, 3rd",
          image: "",
        },
        {
          name: "Lennox Kinyua",
          department: "Mechatronics, 3rd",
          image: "",
        },
        {
          name: "Bakita Omwenga",
          department: "Mechatronics, 3rd",
          image: "",
        },
        {
          name: "Beverly Lasoi",
          department: "Mechatronics, 3rd",
          image: "",
        },
      ]
    },
    {
      name: "Tetsuzakura Knights🌸",
      comment: "Driven by passion, built for excellence, engineered to win.",
      leader: {
        name: "Erick Gitonga Muriu",
        department: "Mechatronics, 4th",
        image: "",
      },
      members: [
        {
          name: "John Khaemba Sumba",
          department: "Mechanical Engineering, 2nd",
          image: "",
        },
        {
          name: "Prudence Nduta Njoroge",
          department: "Mechanical Engineering, 2nd",
          image: "",
        },
        {
          name: "Glenn Kanyi Gatiba ",
          department: "Mechatronics, 4th",
          image: "",
        },
        {
          name: "Allen Kizito Wachio",
          department: "Mechatronics, 4th",
          image: "",
        },
      ]
    },
    {
      name: "Automated Architects ",
      comment: "We came, we saw, we programmed, and tasks were automated",
      leader: {
        name: "Abraham Winston ",
        department: "Electrical and Electronics Engineering, 3rd",
        image: "",
      },
      members: [
        {
          name: "Cephas Nyongesa",
          department: "Electrical and Electronics Engineering, 3rd",
          image: "",
        },
        {
          name: "Basil Karanja Karenjo",
          department: "Electrical and Electronics Engineering, 3rd",
          image: "",
        },
        {
          name: "George Odhiambo",
          department: "Electrical and Electronic Engineering, 3rd",
          image: "",
        },
        {
          name: "Simon Gitonga",
          department: "Electrical and Electronic Engineering, 3rd",
          image: "",
        },
      ]
    },
    {
      name: "Neural Knights",
      comment: "We are intelligent engineers who do everything with honour.",
      leader: {
        name: "Sandra Biaki Keya",
        department: "Electrical and electronics engineering, 3rd",
        image: "",
      },
      members: [
        {
          name: "Cherotich Faith",
          department: "Electrical and electronics engineering, 3rd",
          image: "",
        },
        {
          name: "Collins Chemweno",
          department: "Mechanical Engineering, 1st",
          image: "",
        },
        {
          name: "Stephen David Oduo ",
          department: "Mechanical Engineering, 4th",
          image: "",
        },
        {
          name: "Sylvia Njoki Waweru",
          department: "Electrical and Electronics Engineering, 3rd",
          image: "",
        },
      ]
    },
    {
      name: "The Loose Screw Crew",
      comment: "Error 404... Defeat not found.",
      leader: {
        name: "Allan Masibo",
        department: "The University of Nairobi, Engineering, 3rd",
        image: "",
      },
      members: [
        {
          name: "Jordan Kisera",
          department: "The University of Nairobi, Engineering, 2nd",
          image: "",
        },
        {
          name: "Kyule Musindi",
          department: "The University of Nairobi, Engineering, 2nd",
          image: "",
        },
        {
          name: "Faith Kalondu",
          department: "The University of Nairobi, Engineering, 2nd",
          image: "",
        },
        {
          name: "Leah Chemosit",
          department: "The University of Nairobi, Engineering, 4th",
          image: "",
        },
      ]
    },
    {
      name: "Jabari",
      comment: "Conquer the code, champion the challenge, claim victory",
      leader: {
        name: "Jerry Kiche",
        department: "EEE, 4th",
        image: "",
      },
      members: [
        {
          name: "Clinton Sabi",
          department: "Mechanical engineering, 4th",
          image: "",
        },
        {
          name: "Nathan Waweru",
          department: "Mechanical Engineering, 4th",
          image: "",
        },
        {
          name: "Japheth Musera",
          department: "Mechanical Engineering, 4th",
          image: "",
        },
        {
          name: "Nyabuto Kainda Obonyo Martha",
          department: "Mechanical Engineering, 4th",
          image: "",
        },
      ]
    },
    {
      name: "404_now Found ",
      comment: "Tech is the best thing to happen to humanity and making it better is our responsibility. ",
      leader: {
        name: "IAN NYANGWARA ",
        department: "The Technical University of Kenya, Dip Tech Mechatronics Engineering, 3rd",
        image: "",
      },
      members: [
        {
          name: "Anilla wambaki",
          department: "JKUAT Mechatronics, 2nd",
          image: "",
        },
        {
          name: "Desmond Mose",
          department: "The Technical University of Kenya, Dip Tech Mechatronics, 3rd",
          image: "",
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
      ]
    },
    {
      name: "DeKUT AMR",
      comment: "Precison in motion, vision in cod",
      leader: {
        name: "Michael Machohi",
        department: "Dedan Kimathi University of Technology, Mechatronics, 5th",
        image: "",
      },
      members: [
        {
          name: "Brian Kiprono Samoei",
          department: "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "",
        },
        {
          name: "Paul Migwi",
          department: "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "",
        },
        {
          name: "Zebby Arnold Akach",
          department: "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "",
        },
        {
          name: "James Gathirwa",
          department: "Dedan Kimathi University of Technology, Mechatronics Engineering, 5th",
          image: "",
        },
      ]
    },
  ];

  const teamsRepInfo: TeamsRepInfo[] = [
    {
      name: "Interns 2025",
      comment: "",
      remark: "Dojo interns 2025",
      leader: {
        name: "Victoria Rotich",
        department: "JKUAT BSc, TIE 4th",
        image: "victoria",
      },
      members: [
        {
          name: "Caleb Wambua",
          department: "JKUAT BSc, COIN 3rd",
          image: "caleb",
        },
        {
          name: "Joshua Njau",
          department: "JKUAT BSc, MT 3rd",
          image: "joshua",
        },
        {
          name: "Fiona Opiyo",
          department: "JKUAT BSc, TIE 4th",
          image: "fiona",
        },
        {
          name: "Susan Wanjiru Kimani",
          department: "JKUAT BSc, ECE 4th",
          image: "susan",
        },
        {
          name: "Mutwa Maryanne Farida",
          department: "JKUAT BSc, ECE 4th",
          image: "farida",
        },
        {
          name: "Ruth Olumo",
          department: "JKUAT BSc, ECE 4th",
          image: "/ruth",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Student teams</h2>
          <h3 className="subtitle">Robotics Dojo Competition 2025 </h3>

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
