import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import "./MemberCard.css";

function MemberCard({ member }) {
  const [imageError, setImageError] = useState(false);

  const cleanPhone = member.phone?.replace(/\D/g, "");

  const whatsappNumber =
    cleanPhone?.length === 10
      ? `91${cleanPhone}`
      : cleanPhone;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "#";

  const linkedinLink = member.linkedin
    ? member.linkedin.startsWith("http")
      ? member.linkedin
      : `https://${member.linkedin}`
    : "#";

  const githubLink = member.github
    ? member.github.startsWith("http")
      ? member.github
      : `https://github.com/${member.github}`
    : "#";

  const firstLetter = member.fullName?.charAt(0).toUpperCase();

  return (
    <article className="member-card">
      <div className="member-card__content">
        <div className="member-card__avatar">
          {member.photo && !imageError ? (
            <img
              src={member.photo}
              alt={`${member.fullName} profile`}
              className="member-card__avatar-image"
              style={{
                objectPosition: member.photoPosition || "center top",
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="member-card__avatar-placeholder">
              {firstLetter}
            </div>
          )}
        </div>

        <h1 className="member-card__name">
          {member.fullName}
        </h1>

        <p className="member-card__designation">
          {member.position}
        </p>
        

        <div className="member-card__socials">
          {member.linkedin && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn />
            </a>
          )}

          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram profile"
            >
              <FaInstagram />
            </a>
          )}

          {member.github && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          )}
        </div>

        <a
          className="member-card__connect"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          <span>Connect on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}

export default MemberCard;