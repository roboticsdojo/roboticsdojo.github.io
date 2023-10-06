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

const Teams2023 = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "Limit breakers",
      comment: "Driven by passion, we embrace every challenge",
      leader: {
        name: "Evans Muema",
        department: "JKUAT BSc, EEE 5th",
        image: "evans_muema",
      },
      members: [
        {
          name: "Mohamed Ibrahim Tuke",
          department: "JKUAT BSc, EEE 3rd",
          image: "mohamed_ibrahim",
        },
        {
          name: "Nathan Kingori Machira",
          department: "JKUAT BSc, EEE 3rd",
          image: "nathan_kingori",
        },
        {
          name: "Nasir Jacob",
          department: "JKUAT, EEE 3rd",
          image: "nasir_jacob",
        },
        { name: "Obed Wambugu Gakui", 
        department: "JKUAT, MT 4th", 
        image: "obed_wambugu" },
      ],
    },
    {
      name: "Wajuzi bots",
      comment: "Where technology dances with imagination, extraordinary awaits",
      leader:  {
          name: "Lusaka Timothy",
          department: "JKUAT BSc, EEE 4th",
          image: "lusaka_timothy",
        },
      members: [
        {
          name: "Peace Victor Kipsang",
          department: "JKUAT BSc, EEE 5th",
          image: "peace_victor",
        },
        {
          name: "Diana Koech",
          department: "JKUAT BSc, EEE 4th",
          image: "diana_koech",
        },
        {
          name: "Joshua Hynes Wambui",
          department: "JKUAT BSc, EEE 4th",
          image: "joshua_hynes",
        },
        {
          name: "Edwin Mburu",
          department: "JKUAT BSc, EEE 4th",
          image: "edwin_mburu",
        },
      ],
    },
    {
      name: "Robosapien",
      comment: "Ready to learn and win",
      leader: {
        name: "Mohamed Hashir Hussein ",
        department: "JKUAT BSc, MT 5th",
        image: "mohamed_hashir",
      },
      members: [
        {
          name: "Sameel Ravji Halai",
          department: "JKUAT BSc, MT 5th",
          image: "sameel_ravji",
        },
        {
          name: "Gavins Maragia",
          department: "JKUAT BSc, MT 5th",
          image: "gavins_maragia",
        },
        {
          name: "Caren Agala",
          department: "JKUAT BSc, MT 5th",
          image: "caren_agala",
        },
        {
          name: "Gloria Chepngeno",
          department: "JKUAT BSc, MT 5th",
          image: "gloria_chepngeno",
        },
      ],
    },
    {
      name: "The Actuator Circuits",
      comment:
        "Charged up, Geeked out, Circuit-jesters forging Futuristic Wonders!",
      leader: {
        name: "Daniel Maithya",
        department: "JKUAT BSc, EEE 3rd",
        image: "daniel_maithya",
      },
      members: [
        {
          name: "Cynthia Chepkurui",
          department: "JKUAT BSc, EEE 3rd",
          image: "cynthia_chepkurui",
        },
        {
          name: "Stacy Kibarak",
          department: "JKUAT BSc, EEE 4th",
          image: "stacy_kibarak",
        },
        {
          name: "Samuel Njau",
          department: "JKUAT BSc, EEE 4th",
          image: "samuel_njau",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ],
    },
    {
      name: "The falcon",
      comment: "Driven by technology, Passion to build and innovate.",
      leader: {
        name: "Abdiwahid Guhad Muhammad",
        department: "JKUAT BSc, TIE 4th",
        image: "abdiwahid",
      },
      members: [
        {
          name: "Abdimajid Abdirashid Dahir",
          department: "JKUAT BSc, TIE 4th",
          image: "abdimajid",
        },
        {
          name: "Ahmed Rhoble",
          department: "JKUAT BSc, EEE 4th",
          image: "ahmed_rhoble",
        },
        {
          name: "Reinhard Kiptoo",
          department: "JKUAT BSc, ECE 4th",
          image: "reinhard_kiptoo",
        },
        {
          name: "Jerry Joseph Mumo",
          department: "JKUAT BSc, ECE 4th",
          image: "jerry_joseph",
        },
      ],
    },
    {
      name: "Minotaur",
      comment: "At the heart of things hastening singularity!",
      leader: {
        name: "Frandel Wanjawa",
        department: "JKUAT BSc, EEE 4th",
        image: "frandel_wanjawa",
      },
      members: [
        {
          name: "Adrian Sim Towett",
          department: "JKUAT BSc, EEE 5th",
          image: "adrian_sim",
        },
        {
          name: "Collins Mmasaba",
          department: "JKUAT BSc, TIE 4th",
          image: "collins_mmasaba",
        },
        {
          name: "Basil Khamala",
          department: "JKUAT BSc, EEE 4th",
          image: "basil_khamala",
        },
        {
          name: "Esther Wamaitha",
          department: "JKUAT BSc, EEE 4th",
          image: "esther_wamaitha",
        },
      ],
    },
    {
      name: "Ravenclaw",
      comment:
        "Embrace Unity, Ignite Innovation, Triumph Together – Conquer Glory!",
      leader: {
        name: "Catherine Kabura ",
        department: "JKUAT BSc, TIE 4th",
        image: "catherine_kabura",
      },
      members: [
        {
          name: "Patrick Maina Njuru",
          department: "JKUAT BSc, EEE 3rd",
          image: "patrick_maina",
        },
        {
          name: "Karen Chepngeno",
          department: "JKUAT BSc, TIE 4th",
          image: "karen",
        },
        {
          name: "Erick Gitonga",
          department: "JKUAT BSc, ECE 4th",
          image: "erick_gitonga",
        },
        {
          name: "Samson Mong'are",
          department: "JKUAT BSc, TIE 4th",
          image: "samson_mongare",
        },
      ],
    },
    {
      name: "Tech Titans United",
      comment: "Driven to Innovate, Together We Thrive!",
      leader: {
        name: "Fanuel Nabiswa",
        department: "JKUAT BSc, Physics 3rd",
        image: "fanuel_nabiswa",
      },
      members: [
        {
          name: "Victoria Rotich",
          department: "JKUAT BSc, TIE 3rd",
          image: "victoria_rotich",
        },
        {
          name: "Barbra Gitonga",
          department: "JKUAT BSc, ECE 4th",
          image: "barbra_gitonga",
        },
        {
          name: "Bett Collins",
          department: "JKUAT BSc, MT 4th",
          image: "bett_collins",
        },
        {
          name: "Philip Shawn",
          department: "JKUAT BSc, ECE 4th",
          image: "philip_shawn",
        },
      ],
    },
    {
      name: "Marcus",
      comment: "Building dance partners for humans with two left feet",
      leader: {
        name: "Njuguna Martin",
        department: "JKUAT BSc, SOMMME 5th",
        image: "njuguna_martin",
      },
      members: [
        {
          name: "Keith Muinde",
          department: "JKUAT BSc, SOMMME 5th",
          image: "keith_muinde",
        },
        {
          name: "Dennis Karanga",
          department: "JKUAT BSc, SOMMME 4th",
          image: "dennis_karanga",
        },
        {
          name: "Geoffrey Maragia Nyakagwa ",
          department: "JKUAT BSc, SOMMME 5th",
          image: "geoffrey_maragia",
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
    {
      name: "Phoenix",
      comment: "Keep on insisting",
      remark: "Runner-up team in Dojo competition 2022",
      leader: {
        name: "Brian Macharia",
        department: "JKUAT BSc, MT 3rd",
        image: "brian_macharia",
      },
      members: [
        {
          name: "Hazel Nyaruai",
          department: "JKUAT BSc, MT 3rd",
          image: "hazel_nyaruai",
        },
        {
          name: "Robinlee Mwangi",
          department: "JKUAT BSc, MT 3rd",
          image: "robinlee_mwangi",
        },
        {
          name: "Glenn Kanyi",
          department: "JKUAT BSc, MT 3rd",
          image: "glenn_kanyi",
        },
        {
          name: "Emmanuel Kamau",
          department: "JKUAT BSc, MT 3rd",
          image: "emmanuel_kamau",
        },
      ],
    },
    {
      name: "Spark",
      comment: "Standard of Measure",
      remark: "Dojo 2023 interns",
      leader: {
        name: "Lenny Ng'ang'a",
        department: "JKUAT BSc, Physics 4th",
        image: "lenny_nganga",
      },
      members: [
        {
          name: "Kennedy Wahome",
          department: "JKUAT BSc, EEE 3rd",
          image: "kennedy_wahome",
        },
        {
          name: "Judy Wangechi",
          department: "JKUAT BSc, EEE 3rd",
          image: "judy_wangechi",
        },
        {
          name: "Mirriam Mogeni",
          department: "JKUAT, EEE 3rd",
          image: "mirriam_mogeni",
        },
        {
          name: "Faith Ngina",
          department: "JKUAT, EEE 3rd",
          image: "faith_ngina",
        },
        {
          name: "Eric Mwangi",
          department: "JKUAT, MT 4th",
          image: "eric_mwangi",
        },
        {
          name: "Mwaura Mbugua",
          department: "JKUAT, EEE 5th",
          image: "mwaura_mbugua",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Teams</h2>
          <h3 className="subtitle">Competition 2023 </h3>

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
                              "image/team/2023/" + team.leader.image + ".webp"
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
                                    "image/team/2023/" + member.image + ".webp"
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
                              "image/team/2023/" + team.leader.image + ".webp"
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
                                    "image/team/2023/" + member.image + ".webp"
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

export default Teams2023;
