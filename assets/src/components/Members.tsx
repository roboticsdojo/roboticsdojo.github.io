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
            <div className="card-content">

           {teamsInfo.map((team: TeamsInfo) => {
            return(
          <div>
            <h3 className="subtitle">{team.name}</h3>

              <div className="tile is-ancestor box">
                <div className="tile is-parent">
                  <article className="tile is-child has-text-centered has-image-centered">
                    <figure className="image is-64x64 container">
                      <img
                        className="is-rounded"
                        src={
                          "image/team/" + team.leader.image + ".webp"
                        }
                      />
                    </figure>
                    <p className="is-size-6">{team.leader.name}</p>
                    <p className="is-size-7">
                      {team.leader.department}
                    </p>
                    <p className="is-size-7"><b>Team leader</b></p>
                  </article>
                </div>

                {team.members.map((member: MemberInfo) => {
                  let membersDOM;
                  if (member.name.length === 0) {
                    membersDOM = <div className="tile is-parent is-hidden-mobile" style={{visibility:"hidden"}}>
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
                    </div>;
                  } else {
                    membersDOM = <div className="tile is-parent">
                        <article className="tile is-child has-text-centered has-image-centered">
                          <figure className="image is-64x64 container">
                            <img
                              className="is-rounded"
                              src={"image/team/" + member.image + ".webp"}
                            />
                          </figure>
                          <p className="is-size-6">{member.name}</p>
                          <p className="is-size-7">{member.department}</p>
                        </article>
                      </div>
                  }
                return membersDOM;
                })}
              </div>
            <div style={{marginBottom: "20px;"}}></div>
            </div>
            )
           })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
