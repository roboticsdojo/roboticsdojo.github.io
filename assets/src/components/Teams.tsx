import React from "react";

type TeamsInfo = {
  name: string;
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

const Teams = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "Robosapien",
      leader: {
        name: "Mohamedhashir Hussein",
        department: "JKUAT BSc, MT 4th",
        image: "hussein",
      },
      members: [
        {
          name: "Sameel Ravji Halai",
          department: "JKUAT BSc, MT 4th",
          image: "sameel",
        },
        { name: "Eric Mwangi", department: "JKUAT BSc, MT 4th", image: "eric" },
        {
          name: "Gavins Maragia",
          department: "JKUAT BSc, MT 4th",
          image: "gavins",
        },
        { name: "", department: "", image: "" },
      ],
    },
    {
      name: "team0804",
      leader: {
        name: "Washington Kamadi",
        department: "JKUAT BSc, MT 5th",
        image: "washington",
      },
      members: [
        {
          name: "Michael Kimani",
          department: "JKUAT BSc, MT 5th",
          image: "michael",
        },
        {
          name: "Felix Wanyoike", 
          department: "JKUAT BSc, MT 5th", 
          image: "felix" },
        {
          name: "Sammy Oina",
          department: "JKUAT BSc, MT 5th",
          image: "sammy",
        },
        { 
          name: "Rodney Osodo", 
          department: "JKUAT BSc, MT 5th", 
          image: "rodney" },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Teams</h2>
          <h3 className="subtitle">Competition 2022 </h3>

          <div className="card article">
            <div className="card-content">

           {teamsInfo.map((team: TeamsInfo) => {
            return(
              <div className="tile is-ancestor box">
                <div className="tile is-parent">
                  <article
                    className="tile is-child has-text-centered has-image-centered"
                    style={{ alignSelf: "center" }}
                  >
                    <p className="is-size-6">{team.name}</p>
                  </article>
                </div>

                <div className="tile is-parent">
                  <article className="tile is-child has-text-centered has-image-centered">
                    <figure className="image is-64x64 container">
                      <img
                        className="is-rounded"
                        src={
                          "image/member/" + team.leader.image + ".webp"
                        }
                      />
                    </figure>
                    <p className="is-size-6">{team.leader.name}</p>
                    <p className="is-size-7">
                      {team.leader.department}
                    </p>
                    <p>Team leader</p>
                  </article>
                </div>

                {team.members.map((member: MemberInfo) => {
                  let membersDOM;
                  if (member.name.length === 0) {
                    membersDOM = <div className="tile is-parent is-mobile-hidden" style={{visibility:"hidden"}}>
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
            )
           })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
