import React from "react";

export type PersonInfo = {
  name: string;
  department: string;
  image: string;
};

export type TeamInfo = {
  name: string;
  comment: string;
  remark?: string;
  jointTeam?: string;
  role?: string;
  leader: PersonInfo;
  members: PersonInfo[];
};

const RoleLabel = ({ role }: { role: string }) => {
  if (role === "Mobile platform") return <p style={{ color: "red" }}>Mobile platform</p>;
  if (role === "Navigation") return <p style={{ color: "blue" }}>Navigation</p>;
  return (
    <>
      <p style={{ color: "red" }}>Mobile platform</p>
      <p style={{ color: "blue" }}>Navigation</p>
    </>
  );
};

const PersonTile = ({
  person,
  imageBasePath,
  isLeader = false,
  imageSize = "is-64x64",
}: {
  person: PersonInfo;
  imageBasePath: string;
  isLeader?: boolean;
  imageSize?: string;
}) => {
  if (!person.name) {
    return (
      <div className="tile is-parent is-hidden-mobile" style={{ visibility: "hidden" }}>
        <article className="tile is-child has-text-centered has-image-centered">
          <figure className={`image ${imageSize} container`}>
            <img className="is-rounded" src="image/member/placeholder.webp" alt="" />
          </figure>
        </article>
      </div>
    );
  }
  return (
    <div className="tile is-parent">
      <article className="tile is-child has-text-centered has-image-centered">
        <figure className={`image ${imageSize} container`}>
          <img
            className="is-rounded"
            src={`${imageBasePath}${person.image}.webp`}
            alt={person.name}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.endsWith("image/member/placeholder.webp")) return;
              img.src = "image/member/placeholder.webp";
            }}
          />
        </figure>
        <p className="is-size-6">{person.name}</p>
        <p className="is-size-7">{person.department}</p>
        {isLeader && <p className="is-size-7"><b>Team leader</b></p>}
      </article>
    </div>
  );
};

type Props = {
  team: TeamInfo;
  imageBasePath: string;
  imageSize?: string;
};

const TeamCard = ({ team, imageBasePath, imageSize }: Props) => (
  <div className="tile is-ancestor box">
    <div className="tile is-parent">
      <article
        className="tile is-child has-text-centered has-image-centered"
        style={{ alignSelf: "center" }}
      >
        <p className="is-size-6"><b>{team.name}</b></p>
        <p className="is-size-6"><i>{team.comment}</i></p>
        {team.remark && <p className="is-size-6">(<b>{team.remark}</b>)</p>}
        {team.jointTeam && (
          <>
            <hr />
            <p className="is-size-6"><b>{team.jointTeam}</b></p>
            {team.role && <RoleLabel role={team.role} />}
          </>
        )}
      </article>
    </div>
    <PersonTile person={team.leader} imageBasePath={imageBasePath} imageSize={imageSize} isLeader />
    {team.members.map((member, i) => (
      <PersonTile key={i} person={member} imageBasePath={imageBasePath} imageSize={imageSize} />
    ))}
  </div>
);

export default TeamCard;
