import React, { memo, useEffect, useState } from 'react';
import { Markup } from 'interweave';
import { Box } from '@mui/material';
import Text from 'components/common/Text';
import { useTheme } from 'hooks/common';
import Image from 'next/image';
import { Article } from '..';

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box
      sx={{
        mt,
        mb,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: `1px solid #e1e0e05f`,
        borderRadius: '1rem',
        '& .medium-feed-image, & .medium-feed-link': {
          display: 'none',
        },
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.09)',
      }}
    >
      <Box
        sx={{
          paddingX: 2,
          paddingY: 2,
        }}
      >
        <Text
          sx={{
            color: theme.text.primary,
            fontSize: '1.1rem',
            fontWeight: 'bold',
          }}
        >
          {article.title}
        </Text>
        <Text
          sx={{
            color: theme.text.secondary,
            fontSize: '0.95rem',
            mt: 0.5,
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
            Posted 1 Month ago
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
      <Box sx={{ height: '100%' }}>
        <Image
          src={article.thumbnail}
          width={400}
          height={400}
          style={{
            width: '120px',
            height: '100%',
            minHeight: '142px',
            maxHeight: '300px',
            objectFit: 'cover',
            borderRadius: '0.6rem',
          }}
          alt=""
        />
      </Box>
    </Box>
  );
}

export default memo(BlogCard);
