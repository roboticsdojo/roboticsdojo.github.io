import React from "react";

type TeamsInfo = {
  name: string;
  comment: string;
  leader: LeaderInfo;
  members: MemberInfo[];
  joint_team: string;
  role: string;
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

const Teams2024 = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "Team 0804",
      comment: "Leading from the Front",
      leader: {
        name: "Washington Kamadi",
        department: "PAUSTI MSc, Mechatronics 1st",
        image: "washington_kamadi",
      },
      joint_team: "Joint team 1",
      role: "Mobile platform",
      members: [
        {
          name: "Felix Wanyoike",
          department: "JKUAT Mechatronics alumni, Dojo alumni",
          image: "felix_wanyoike",
        },
        {
          name: "Michael Kimani",
          department: "JKUAT mechatrnics alumni, Dojo alumni",
          image: "michael_kimani",
        },
        {
          name: "",
          department: "",
          image: "",
        },
        { name: "", 
        department: "", 
        image: "" },
      ],
    },
    {
      name: "Limit Breakers ",
      comment: "Innovation through determination, breaking limits with every step.",
      leader:  {
          name: "Mohamed Ibrahim Tuke",
          department: "JKUAT BSc, EEE 3rd",
          image: "mohamed_ibrahim",
        },
      joint_team: "Joint team 1",
      role: "Navigation",
      members: [
        {
          name: "Nathan Kingori",
          department: "JKUAT BSc, EEE 3rd",
          image: "nathan_kingori",
        },
        {
          name: "Nasir Jacob Idriss",
          department: "JKUAT BSc, EEE 3rd",
          image: "nasir_jacob_idriss",
        },
        {
          name: "Obed Wambugu",
          department: "JKUAT BSc, Mechatronics 4th",
          image: "obed",
        },
        {
          name: "Leonard M. Boma",
          department: "JKUAT BSc, EEE 3rd",
          image: "leonard_boma",
        },
      ],
    },
    {
      name: "RoboQueens",
      comment:
        "RoboQueens: Together, we build, we inspire, we conquer!",
      leader: {
        name: "Victoria Rotich",
        department: "JKUAT BSc, TIE 4th",
        image: "victoria_rotich",
      },
      joint_team: "Joint team 2",
      role: "Mobile platform",
      members: [
        {
          name: "Irene Yegon",
          department: "JKUAT BSc, TIE 4th",
          image: "irene_yegon",
        },
        {
          name: "Agnes Kimani",
          department: "JKUAT BSc, Mechanical 4th",
          image: "agnes_kimani",
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
      name: "Team Atom",
      comment: "Engineering dreams into robotic realities.",
      leader: {
        name: "Daniel Maithya",
        department: "JKUAT BSc, EEE 5th",
        image: "daniel_maithya",
      },
      joint_team: "Joint team 2",
      role: "Navigation",
      members: [
        {
          name: "Stacy Kibarak",
          department: "JKUAT BSc, EEE 5th",
          image: "stacy_kibarak",
        },
        {
          name: "Samuel Njau",
          department: "JKUAT BSc, EEE 5th",
          image: "samule_njau",
        },
        {
          name: "Kelvine Chweya",
          department: "JKUAT BSc, EEE 5th",
          image: "kelvine_chweya",
        },
        {
          name: "Kings Munene",
          department: "JKUAT BSc, EEE 5th",
          image: "kings_munene",
        },
      ],
    },
    {
      name: "KNIGHTS",
      comment: "Engineers, ignite innovation, conquer challenges, embrace teamwork, excel!",
      leader: {
        name: "Amos Oniare",
        department: "JKUAT BSc, Mechatronics 3rd",
        image: "amos_oniare",
      },
      joint_team: "Joint team 3",
      role: "Mobile platform",
      members: [
        {
          name: "Dismas Karimi",
          department: "JKUAT BSc, Mechatronics 3rd",
          image: "dismas_karimi",
        },
        {
          name: "Gareth Kipkoech",
          department: "JKUAT BSc, Mechatronics 3rd",
          image: "gareth_kipkoech",
        },
        {
          name: "Fundi Brian",
          department: "JKUAT BSc, Mechatronics 3rd",
          image: "fundi_brian",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ],
    },
    {
      name: "Pentagon",
      comment: "Coding the dream, dreaming the code!",
      leader: {
        name: "Daniel Karume",
        department: "JKUAT BSc, Computing 2nd",
        image: "daniel_karume",
      },
      joint_team: "Joint team 3",
      role: "Navigation",
      members: [
        {
          name: "Joseph Kirika",
          department: "JKUAT BSc, Computing 2nd",
          image: "joseph_kirika",
        },
        {
          name: "Peaches Njenga",
          department: "JKUAT BSc, Computing 2nd",
          image: "peaches_njenga",
        },
        {
          name: "Geoffrey Chege Kimani",
          department: "JKUAT BSc, Computing 2nd",
          image: "geoffrey_chege",
        },
        {
          name: "Irke Konzolo",
          department: "JKUAT BSc, Computing 2nd",
          image: "irke_konzolo",
        },
      ],
    },
    {
      name: "R.O.O.K Droid",
      comment:
        "Creating robots, inspiring futures, achieving greatness together.",
      leader: {
        name: "Felix Ronoh",
        department: "JKUAT BSc, Mechatronics 4th",
        image: "felix_ronoh",
      },
      joint_team: "Joint team 4",
      role: "Mobile platform",
      members: [
        {
          name: "Collins Omariba",
          department: "JKUAT BSc, Mechatronics 4th",
          image: "collins_omariba",
        },
        {
          name: "Hillary Murimi",
          department: "JKUAT BSc, Mechatronics 4th",
          image: "hillary_murimi",
        },
        {
          name: "Jeremiah Onyapidi",
          department: "JKUAT BSc, Mechatronics 4th",
          image: "jeremiah",
        },
        {
          name: "Lukundo Okemba",
          department: "JKUAT BSc, Mechatronics 4th",
          image: "lukundo_okemba",
        },
      ],
    },
    {
      name: "Echo",
      comment: "Experimenting, building, and conquering challenges together",
      leader: {
        name: "Karen Chepngeno",
        department: "JKUAT BSc, TIE 4th",
        image: "karen_langat",
      },
      joint_team: "Joint team 4",
      role: "Navigation",
      members: [
        {
          name: "Nindo Emmanuel",
          department: "JKUAT BSc, Mechatronics 4th",
          image: "nindo_emmanuel",
        },
        {
          name: "Matiko George Maroa",
          department: "JKUAT BSc, TIE 4th",
          image: "matiko",
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
      name: "Syzygy",
      comment: "In it to win it.",
      leader: {
        name: "Brian Macharia",
        department: "JKUAT BSc, Mechatronics 4th",
        image: "brian_macharia",
      },
      joint_team: "Joint team 5",
      role: "Navigation",
      members: [
        {
          name: "Kennedy Wahome",
          department: "JKUAT BSc, EEE 5th",
          image: "kennedy_wahome",
        },
        {
          name: "Lenny Ng'ang'a",
          department: "JKUAT Physics alumni, Dojo former intern & alumni",
          image: "lenny",
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
  ];

  const teamsRepInfo: TeamsRepInfo[] = [
    // {
    //   name: "Phoenix",
    //   comment: "Keep on insisting",
    //   remark: "Runner-up team in Dojo competition 2022",
    //   leader: {
    //     name: "Brian Macharia",
    //     department: "JKUAT BSc, MT 3rd",
    //     image: "brian_macharia",
    //   },
    //   members: [
    //     {
    //       name: "Hazel Nyaruai",
    //       department: "JKUAT BSc, MT 3rd",
    //       image: "hazel_nyaruai",
    //     },
    //     {
    //       name: "Robinlee Mwangi",
    //       department: "JKUAT BSc, MT 3rd",
    //       image: "robinlee_mwangi",
    //     },
    //     {
    //       name: "Glenn Kanyi",
    //       department: "JKUAT BSc, MT 3rd",
    //       image: "glenn_kanyi",
    //     },
    //     {
    //       name: "Emmanuel Kamau",
    //       department: "JKUAT BSc, MT 3rd",
    //       image: "emmanuel_kamau",
    //     },
    //   ],
    // },
    // {
    //   name: "Spark",
    //   comment: "Standard of Measure",
    //   remark: "Dojo 2024 interns",
    //   leader: {
    //     name: "Lenny Ng'ang'a",
    //     department: "JKUAT BSc, Physics 4th",
    //     image: "lenny_nganga",
    //   },
    //   members: [
    //     {
    //       name: "Kennedy Wahome",
    //       department: "JKUAT BSc, EEE 3rd",
    //       image: "kennedy_wahome",
    //     },
    //     {
    //       name: "Judy Wangechi",
    //       department: "JKUAT BSc, EEE 3rd",
    //       image: "judy_wangechi",
    //     },
    //     {
    //       name: "Mirriam Mogeni",
    //       department: "JKUAT, EEE 3rd",
    //       image: "mirriam_mogeni",
    //     },
    //     {
    //       name: "Faith Ngina",
    //       department: "JKUAT, EEE 3rd",
    //       image: "faith_ngina",
    //     },
    //     {
    //       name: "Eric Mwangi",
    //       department: "JKUAT, MT 4th",
    //       image: "eric_mwangi",
    //     },
    //     {
    //       name: "Mwaura Mbugua",
    //       department: "JKUAT, EEE 5th",
    //       image: "mwaura_mbugua",
    //     },
    //   ],
    // },
  ];

  interface RoleComponentProps {
    role: string;
  }
  
  const RoleComponent: React.FC<RoleComponentProps> = (props) => {
    console.log(props.role)
    return (
      <p className="is-size-6">
      {(props.role == "Mobile platform")? 
        <p style={{color:'red'}}>Mobile platform</p> :
        <p style={{color:'blue'}}>Navigation</p>
      } 
      </p>
    );
  };

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Student teams</h2>
          <h3 className="subtitle">Robotics Dojo Competition 2024 </h3>

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
                        <hr/>
                        <p className="is-size-6">
                          <b>{team.joint_team}</b>
                        </p>
                        {RoleComponent(team)}
                      </article>
                    </div>

                    <div className="tile is-parent">
                      <article className="tile is-child has-text-centered has-image-centered">
                        <figure className="image is-64x64 container">
                          <img
                            className="is-rounded"
                            src={
                              "image/team/2024/" + team.leader.image + ".webp"
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
                                    "image/team/2024/" + member.image + ".webp"
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
                              "image/team/2024/" + team.leader.image + ".webp"
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
                                    "image/team/2024/" + member.image + ".webp"
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

export default Teams2024;
