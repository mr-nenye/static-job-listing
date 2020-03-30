import React from "react";
import "./style.scss";
import img1 from "./images/photosnap.svg";
import img2 from "./images/manage.svg";
import img3 from "./images/account.svg";
import img4 from "./images/myhome.svg";
import img5 from "./images/loop-studios.svg";
import img6 from "./images/faceit.svg";
import img7 from "./images/shortly.svg";
import img8 from "./images/insure.svg";
import img9 from "./images/eyecam-co.svg";
import img10 from "./images/the-air-filter-company.svg";

const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: img1,
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    company: "Manage",
    logo: img2,
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    company: "Account",
    logo: img3,
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    company: "MyHome",
    logo: img4,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"]
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: img5,
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: img6,
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    tools: ["RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: img7,
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
    company: "Insure",
    logo: img8,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue, Sass"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: img9,
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: img10,
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
];

function App() {
  return (
    <div className="App">
      <header />

      <div className="container">
        {data &&
          data.map(item => {
            return (
              <div className="singleJobList" key={item.id}>
                <div className="img-cell">
                  <img src={item.logo} alt="logo" />
                </div>
                <div className="info-cell">
                  <div>
                    <span>{item.company}</span>
                    {item.new && item.new ? (
                      <small className="new-cell"> new!</small>
                    ) : null}
                    {item.featured && item.featured ? (
                      <small className="featured-cell"> featured</small>
                    ) : null}
                  </div>
                  <div>
                    <p className="position">{item.position}</p>
                  </div>
                  <div style={{ color: "hsl(180, 8%, 52%)" }}>
                    <smal className="time">{item.postedAt}</smal> &#8226;
                    <smal className="contract">{item.contract}</smal> &#8226;
                    <smal className="location">{item.location}</smal>
                  </div>
                </div>
                <div className="tags-cell">
                  <small>{item.role}</small>
                  <small>{item.level}</small>
                  {item.languages &&
                    item.languages.map(language => {
                      return <small>{language}</small>;
                    })}
                  {item.tools &&
                    item.tools.map(tool => {
                      return <small>{tool}</small>;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
