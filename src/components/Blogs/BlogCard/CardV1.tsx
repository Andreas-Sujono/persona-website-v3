import React, { memo } from 'react';
import { Markup } from 'interweave';
import { Box } from '@mui/material';

interface Props {
  title: string;
  desc: string;
  link: string;
  pubDate: string;
  categories: string[];
  githubCode: string;
}

function BlogCard({
  title,
  desc,
  link,
  pubDate,
  categories,
  githubCode,
}: Props) {
  const badgeString = [
    'secondary',
    'success',
    'secondary',
    'danger',
    'primary',
    'warning',
    'info',
    'light',
    'primary',
  ];
  const getRandomBadge = () => {
    const id = Math.floor(Math.random() * badgeString.length);
    return badgeString[id];
  };
  const parsedDesc = desc.length > 500 ? desc.slice(0, 500) : desc;

  return (
    <Box>
      <Box>
        <h5 className="card-title">{title}</h5>
        <div className="pub-date">{pubDate}</div>
        <div className="categories">
          {categories.map((item) => (
            <span className={`badge badge-${getRandomBadge()}`} key={item}>
              {item}
            </span>
          ))}
        </div>
        <p className="card-text">
          <Markup content={parsedDesc} />
        </p>
        <a href={link} className="btn btn-dark" target="__blank">
          See more
        </a>
      </Box>
    </Box>
  );
}

export default memo(BlogCard);
