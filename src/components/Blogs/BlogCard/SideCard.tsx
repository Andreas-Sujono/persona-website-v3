import Text from 'components/common/Text';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import { Article } from '..';
import moment from 'moment';

interface Props {
  mt?: number | string | Record<string, number | string>;
  article: Article;
}

export default function SideCard({ mt = 0, article }: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.221)',
        borderRadius: '0.6rem',
        // border: `1px solid #e1e0e0a3`,
        // border: `1px solid ${theme.text.highlight}`,
      }}
    >
      <a target="_blank" href={article.link} rel="noopener noreferrer">
        <Box sx={{ p: 0.5 }}>
          <Text
            sx={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              maxWidth: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {article.title}
          </Text>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 0.5,
              mb: 1,
            }}
          >
            <Text
              sx={{
                color: theme.text.secondary,
                fontSize: '0.9rem',
              }}
            >
              Posted{' '}
              {moment.duration(-moment().diff(article.pubDate)).humanize(true)}
            </Text>
            <Text
              sx={{
                color: theme.text.secondary,
                fontSize: '0.9rem',
              }}
            >
              By Andreas Sujono
            </Text>
          </Box>
        </Box>
        <Image
          src={article.thumbnail}
          width={400}
          height={400}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '150px',
            objectFit: 'cover',
            borderRadius: '0.6rem',
          }}
          alt=""
        />
      </a>
    </Box>
  );
}
