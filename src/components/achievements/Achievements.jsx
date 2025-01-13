import "./achievements.css";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Core Member ISTE-CU Launch",
      image: `${import.meta.env.BASE_URL}techlead.jpg`,
    },
    {
      id: 2,
      title: "Top Performer Project Exhibition",
      image: `${import.meta.env.BASE_URL}project.jpg`,
    },
    {
      id: 3,
      title: "Leadership Recognition",
      image: `${import.meta.env.BASE_URL}iste.jpg`,
    },
    {
      id: 4,
      title: "Innovation in AI-HackWithIndia",
      image: `${import.meta.env.BASE_URL}hackwithindia.jpg`,
    },
    {
      id: 5,
      title: "Best Diwali-Extravaganza Stall",
      image: `${import.meta.env.BASE_URL}diwali.jpg`,
    },
    {
      id: 6,
      title: "Winner DSA Competition",
      image: `${import.meta.env.BASE_URL}dsa.jpg`,
    },
  ];

  return (
    <div className="achievements">
      <h1 className="achievementsTitle">Achievement Gallery</h1>
      <div className="achievementsGrid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievementCard">
            <img src={achievement.image} alt={achievement.title} />
            <h2>{achievement.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
