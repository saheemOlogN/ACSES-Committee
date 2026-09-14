import { useParams } from "react-router-dom";

import DarkVeil from "../components/DarkVeil";
import MemberCard from "../components/MemberCard";

import members from "../data/members.json";

import "../App.css";

function MemberProfile() {
  const { name } = useParams();

  const member = members.find(
    (member) => member.name.toLowerCase() === name.toLowerCase()
  );

  if (!member) {
    return (
      <main className="app">
        <div className="background">
          <DarkVeil />
        </div>

        <div className="content">
          <div className="not-found">
            <h1>Member Not Found</h1>
            <p>The profile you are looking for does not exist.</p>
          </div>
        </div>

        <p className="page-credit">
          Made by <span>Saheem</span>
        </p>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="background">
        <DarkVeil />
      </div>

      <div className="content">
        <MemberCard member={member} />
      </div>

      <p className="page-credit">
        Made by <span>Saheem</span>
      </p>
    </main>
  );
}

export default MemberProfile;