import React, { memo, useEffect, useState } from 'react';
import { Markup } from 'interweave';
import { Box } from '@mui/material';
import Text from 'components/common/Text';
import { useTheme } from 'hooks/common';
import Image from 'next/image';
import { Article } from '..';
import moment from 'moment';
import useWindowDimensions from 'hooks/common/useDimension';

interface Props {
  article: Article;
  mt?: number | string;
  mb?: number | string;
}

function BlogCard({ article, mt, mb }: Props) {
  const theme = useTheme();
  const desc = article.content || '';
  const parsedDesc = desc.length > 500 ? desc.slice(0, 500) : desc;
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <a target="_blank" href={article.link} rel="noopener noreferrer">
      <Box
        sx={{
          mt,
          mb,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          borderRadius: '1rem',
          '& .medium-feed-image, & .medium-feed-link': {
            display: 'none',
          },
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.09)',
          border: `1px solid ${theme.text.highlight}`,
          // border: `1px solid #e1e0e05f`,
        }}
      >
        <Box
          sx={{
            paddingX: {
              md: 2,
              xs: 1.5,
            },
            paddingY: {
              md: 2,
              xs: 1.3,
            },
          }}
        >
          <Text
            sx={{
              color: theme.text.primary,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: isMobile ? 1 : 2,
              lineClamp: isMobile ? 1 : 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {article.title}
          </Text>
          <Text
            sx={{
              color: theme.text.secondary,
              fontSize: '0.95rem',
              mt: 0.5,
              minHeight: '42px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: isMobile ? 2 : 3,
              lineClamp: isMobile ? 2 : 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {isMounted && <Markup content={parsedDesc} />}{' '}
          </Text>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1.5,
            }}
          >
            <Text
              sx={{
                color: theme.text.secondary,
                fontSize: '0.8rem',
              }}
            >
              Posted{' '}
              {moment.duration(-moment().diff(article.pubDate)).humanize(true)}
            </Text>
            <Text
              sx={{
                color: theme.text.secondary,
                fontSize: '0.8rem',
              }}
            >
              By Andreas Sujono
            </Text>
          </Box>
        </Box>
        <Box sx={{}}>
          <Image
            src={article.thumbnail}
            width={400}
            height={400}
            style={{
              width: isMobile ? '80px' : '120px',
              height: '100%',
              minHeight: isMobile ? '70px' : '136px',
              maxHeight: '300px',
              objectFit: 'cover',
              borderRadius: '0 1rem 1rem 0',
            }}
            alt=""
          />
        </Box>
      </Box>
    </a>
  );
}

export default memo(BlogCard);
