import React from 'react';
import IMG1 from '../../assets/jdb.png';
import IMG2 from '../../assets/phutbol.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'JDB Cars',
      img: IMG1,
      description:
        'Web Application that assists users in buying/selling used cars',
      technologies:
        'Express | Node | Sequelize | Postgres | React | Redux | Javascript | HTML | CSS',
      github: 'https://github.com/2006-gs-leo/grace-shopper',
    },
    {
      id: 2,
      title: 'Phutbol',
      img: IMG2,
      description:
        'Collaborative soccer game inspired by HaxBall aimed at increasing interaction during the pandemic',
      technologies: 'JavaScript | Phaser | Socket.IO | Firebase',
      github: 'https://github.com/2006-links-light/phutbol',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
