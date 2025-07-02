import React from "react";

type TeamsInfo = {
  name: string;
  comment: string;
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

const Members = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "Interns 2025",
      comment: "Interns 2025",
      leader: {
        name: "Victoria Rotich",
        department: "JKUAT BSc, MT 4th",
        image: "2025/victoria",
      },
      members: [
        {
          name: "Caleb Wambua",
          department: "JKUAT BSc, MT 4th",
          image: "2025/caleb",
        },
        {
          name: "Joshua Njau",
          department: "JKUAT BSc, MT 4th",
          image: "2025/joshua",
        },
        {
          name: "Fiona Opiyo",
          department: "JKUAT BSc, MT 4th",
          image: "2025/fiona",
        },
        {
          name: "Susan Wanjiru Kimani",
          department: "JKUAT BSc, MT 4th",
          image: "2025/ruth",
        },
        {
          name: "Mutwa Maryanne Farida",
          department: "JKUAT BSc, MT 4th",
          image: "2025/farida",
        },
        {
          name: "",
          department: "",
          image: "",
        },
      ],
    },
    {
      name: "Interns 2024",
      comment: "Interns 2024",
      leader: {
        name: "Lenny Ng'ang'a",
        department: "JKUAT BSc, MT 4th",
        image: "2024/lenny",
      },
      members: [
        {
          name: "Brian Macharia",
          department: "JKUAT BSc, MT 4th",
          image: "2024/brian_macharia",
        },
        {
          name: "Kennedy Wahome",
          department: "JKUAT BSc, MT 4th",
          image: "2024/kennedy_wahome",
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
      name: "Interns 2023",
      comment: "Interns 2023",
      leader: {
        name: "Lenny Ng'ang'a",
        department: "JKUAT BSc, MT 4th",
        image: "2024/lenny",
      },
      members: [
        {
          name: "Kennedy Wahome",
          department: "JKUAT BSc, MT 4th",
          image: "2023/kennedy_wahome",
        },
        {
          name: "Judy Wangechi",
          department: "JKUAT BSc, MT 4th",
          image: "2023/judy_wangechi",
        },
        {
          name: "Mirriam Mogeni",
          department: "JKUAT BSc, MT 4th",
          image: "2023/mirriam_mogeni",
        },
        {
          name: "Faith Ngina",
          department: "JKUAT BSc, MT 4th",
          image: "2023/faith_ngina",
        },
        {
          name: "Eric Mwangi",
          department: "JKUAT BSc, MT 4th",
          image: "2023/eric_mwangi",
        },
        {
          name: "Mwaura Mbugua",
          department: "JKUAT BSc, MT 4th",
          image: "2023/mwaura_mbugua",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Members</h2>

          <div className="card article"> 
          <div style={{marginBottom: "20px"}}>
          <p>
            The Robotics Dojo is organized by JKUAT staff and the student interns.
          </p>
          </div>
          <h3 className="subtitle">Organizers</h3>

          <div className="article" style={{ marginTop: "20px" }}>
            <div className="tile is-ancestor">

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img className="is-rounded" src="image/staff/shohei.webp" />
                  </figure>
                  <p className="is-size-6">Dr. Shohei Aoki</p>
                  <p className="is-size-7">AFRICA-ai-JAPAN Project</p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img className="is-rounded" src="image/staff/githu.webp" />
                  </figure>
                  <p className="is-size-6">Dr. Jackson Githu</p>
                  <p className="is-size-7">
                    Department of Mechatronic Engineering
                  </p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img
                      className="is-rounded"
                      src="image/team/2024/lenny.webp"
                    />
                  </figure>
                  <p className="is-size-6">Lenny Ng'ang'a</p>
                  <p className="is-size-7">Lead Robotics Researcher</p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img className="is-rounded" src="image/staff/kaburu.webp" />
                  </figure>
                  <p className="is-size-6">Dr. Dennis Kaburu</p>
                  <p className="is-size-7">
                    School of Computer Science and Information Technology
                  </p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img className="is-rounded" src="image/staff/oloo.webp" />
                  </figure>
                  <p className="is-size-6">Jackson Oloo</p>
                  <p className="is-size-7">
                    Department of Electrical and Electronic Engineering
                  </p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img
                      className="is-rounded"
                      src="image/member/placeholder.webp"
                    />
                  </figure>
                  <p className="is-size-6">Dr. Mercy Kiio</p>
                  <p className="is-size-7">
                    Department of Electrical and Electronic Engineering
                  </p>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img
                      className="is-rounded"
                      src="image/staff/patrick.webp"
                    />
                  </figure>
                  <p className="is-size-6">Patrick Kipkosgey</p>
                  <p className="is-size-7">
                    Department of Mechatronic Engineering
                  </p>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child has-text-centered has-image-centered">
                  <figure className="image is-96x96 container">
                    <img className="is-rounded" src="image/staff/nderu.webp" />
                  </figure>
                  <p className="is-size-6">Dr. Lawrence Nderu</p>
                  <p className="is-size-7">
                    School of Computer Science and Information Technology
                  </p>
                </article>
              </div>

              <div
                className="tile is-parent is-hidden-mobile"
                style={{ visibility: "hidden" }}
              >
                <article className="tile is-child has-text-centered has-image-centered"></article>
              </div>
              <div
                className="tile is-parent is-hidden-mobile"
                style={{ visibility: "hidden" }}
              >
                <article className="tile is-child has-text-centered has-image-centered"></article>
              </div>
              <div
                className="tile is-parent is-hidden-mobile"
                style={{ visibility: "hidden" }}
              >
                <article className="tile is-child has-text-centered has-image-centered"></article>
              </div>
              <div
                className="tile is-parent is-hidden-mobile"
                style={{ visibility: "hidden" }}
              >
                <article className="tile is-child has-text-centered has-image-centered"></article>
              </div>
            </div>
          </div>


            <div className="card-content">
              {teamsInfo.map((team: TeamsInfo) => {
                return (
                  <div>
                    <h3 className="subtitle">{team.name}</h3>

                    <div className="tile is-ancestor">
                      <div className="tile is-parent">
                        <article className="tile is-child has-text-centered has-image-centered">
                          <figure className="image is-96x96 container">
                            <img
                              className="is-rounded"
                              src={"image/team/" + team.leader.image + ".webp"}
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
                                <figure className="image is-96x96 container">
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
                                <figure className="image is-96x96 container">
                                  <img
                                    className="is-rounded"
                                    src={"image/team/" + member.image + ".webp"}
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
                    <div style={{ marginBottom: "20px" }}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Members;
