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

const Teams = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "Robosapien",
      comment: "Leave dangerously",
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
      comment: "Ready to win and learn!",
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
    {
      name: "Cygnus",
      comment: "Our goal is to play to win",
      leader: {
        name: "Maiga Abdoul-Aziz",
        department: "PAUSTI PhD, EEE 1st",
        image: "maiga",
      },
      members: [
        {
          name: "Alshima Alwali",
          department: "PAUSTI MSc, EEE 1st",
          image: "shima",
        },
        {
          name: "Brian Macharia", 
          department: "JKUAT BSc, MT 1st", 
          image: "brian" },
        {
          name: "Michael Ong'ong'a",
          department: "JKUAT BSc, EEE 1st",
          image: "ongonga",
        },
        { 
          name: "", 
          department: "", 
          image: "" },
      ],
    },
    {
      name: "Spark",
      comment: "Ambitious problem solvers passionate about robotics and related technologies",
      leader: {
        name: "Gloria Muli",
        department: "JKUAT BSc, Physics 3rd",
        image: "gloria",
      },
      members: [
        {
          name: "Lenny Ng'ang'a",
          department: "JKUAT BSc, Physics 3rd",
          image: "lenny",
        },
        {
          name: "Kennedy Wahome", 
          department: "JKUAT BSc, EEE 3rd", 
          image: "kennedy" },
        {
          name: "Adrian Orioki Omari",
          department: "JKUAT BSc, Math 3rd",
          image: "adrian",
        },
        { 
          name: "", 
          department: "", 
          image: "" },
      ],
    },
    {
      name: "Team SEEB",
      comment: "We build to Win, We got this",
      leader: {
        name: "Hosameldin Adam",
        department: "PAUSTI MSc, MT 2nd",
        image: "hosameldin",
      },
      members: [
        {
          name: "Abdoulaye Sidibe",
          department: "PAUSTI MSc, MT 2nd",
          image: "sidibe",
        },
        {
          name: "Koulnodji Elysée", 
          department: "PAUSTI MSc, MT 2nd", 
          image: "elysee" },
        {
          name: "",
          department: "",
          image: "",
        },
        { 
          name: "", 
          department: "", 
          image: "" },
      ],
    },
    {
      name: "N3rd H3rd",
      comment: "Learn, unlearn, relearn",
      leader: {
        name: "Mark Odhiambo",
        department: "JKUAT BSc, ECE 5th",
        image: "mark",
      },
      members: [
        {
          name: "Clinton Agunda",
          department: "JKUAT BSc, ECE 5th",
          image: "clinton",
        },
        {
          name: "Timothy Njau", 
          department: "JKUAT BSc, ECE 5th", 
          image: "timothy" },
        {
          name: "Aaron",
          department: "JKUAT BSc, ECE 4th", 
          image: "aaron",
        },
        {
          name: "Ambani Godwin",
          department: "JKUAT BSc, EEE 5th", 
          image: "ambani",
        },
      ],
    },
    {
      name: "E.L.B.E.",
      comment: "Explore, Learn, and, Build Engineering",
      leader: {
        name: "Ogweno Emmanuel",
        department: "JKUAT BSc, Mechanical 3rd",
        image: "ogweno",
      },
      members: [
        {
          name: "Allan Okeyo",
          department: "JKUAT BSc, Mechanical 3rd",
          image: "allan",
        },
        {
          name: "David Njuguna", 
          department: "JKUAT BSc, Mechanical 3rd", 
          image: "david" },
        {
          name: "Steve Gichuki Kahome",
          department: "JKUAT BSc, Mechanical 3rd", 
          image: "gichuki",
        },
        {
          name: "",
          department: "", 
          image: "",
        },
      ],
    },
    {
      name: "Optimus Prime ",
      comment: "“Winning isn’t everything, it’s the only thing.” ~ Vince Lombardi",
      leader: {
        name: "Faith Hunja ",
        department: "JKUAT BSc, MT 5th",
        image: "hunja",
      },
      members: [
        {
          name: "Leonard Maina",
          department: "JKUAT BSc, MT 5th",
          image: "leonard",
        },
        {
          name: "Andrew Omolo", 
          department: "JKUAT BSc, MT 5th", 
          image: "andrew" },
        {
          name: "Steve Nyaga",
          department: "JKUAT BSc, MT 5th", 
          image: "steve",
        },
        {
          name: "Sylvester Kabiru ",
          department: "JKUAT BSc, MT 5th", 
          image: "sylvester",
        },
      ],
    },
    {
      name: "Team Aether",
      comment: "We love a good challenge and can't wait to tackle this one",
      leader: {
        name: "Junn Hope",
        department: "JKUAT BSc, TIE 4th",
        image: "junn",
      },
      members: [
        {
          name: "Edwin Mwiti",
          department: "JKUAT BSc, ECE 4th",
          image: "edwin",
        },
        {
          name: "Ernest Wambua", 
          department: "JKUAT BSc, TIE 4th", 
          image: "ernest" },
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
      name: "Agrothinkers",
      comment: "If we can't do great things, let's do little things in a great way",
      leader: {
        name: "Soumo Emmanuel Arnaud",
        department: "PAUSTI MSc, MT 2nd",
        image: "emmanuel",
      },
      members: [
        {
          name: "Tchato Giovani Vidal",
          department: "PAUSTI MSc, MT 2nd",
          image: "tchato",
        },
        {
          name: "Alex Mburu Muchiri", 
          department: "JKUAT BSc, MT 5th", 
          image: "alex" },
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
      name: "RO-04",
      comment: "To never stop learning!",
      leader: {
        name: "Sitienei Mercy",
        department: "JKUAT BSc, EEE 5th",
        image: "mercy",
      },
      members: [
        {
          name: "Brian Kusimba",
          department: "JKUAT BSc, EEE 5th",
          image: "kusimba",
        },
        {
          name: "Immaculate Munini", 
          department: "JKUAT BSc, EEE 5th", 
          image: "munini" },
        {
          name: "Onyango Daniel",
          department: "JKUAT BSc, EEE 5th", 
          image: "daniel",
        },
        {
          name: "Sebastian Muchui",
          department: "JKUAT BSc, Physics 1st", 
          image: "sebastian",
        },
      ],
    },
    {
      name: "Phoenix",
      comment: "Keep on insisting",
      leader: {
        name: "Emmanuel Kamau",
        department: "JKUAT BSc, MT 2nd",
        image: "ryley",
      },
      members: [
        {
          name: "Ismael Kariuki",
          department: "JKUAT BSc, MT 2nd",
          image: "ismael",
        },
        {
          name: "Hazel Nyaruai",
          department: "JKUAT BSc MT 2nd", 
          image: "hazel",
        },
        {
          name: "Robinlee Mwangi", 
          department: "JKUAT BSc, MT 2nd", 
          image: "robinlee" },
        {
          name: "Glenn Kanyi",
          department: "JKUAT BSc, MT 2nd", 
          image: "glenn",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Student teams</h2>
          <h3 className="subtitle">Robotics Dojo Competition 2022 </h3>

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
                    <p className="is-size-6"><b>{team.name}</b></p>
                    <p className="is-size-6"><i>{team.comment}</i></p>
                  </article>
                </div>

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
