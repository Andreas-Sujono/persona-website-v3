import Text from 'components/common/Text';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import { Article } from '..';
import moment from 'moment';

interface Props {
  article: Article;
}

export default function MainCard({ article }: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // border: `1px solid #e1e0e0a3`,
        borderRadius: '1rem',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.09)',
      }}
    >
      <Box
      // sx={{
      //   p: 3,
      // }}
      >
        <Text
          sx={{
            fontSize: '1.3rem',
            overflow: 'hidden',
            maxWidth: '100%',
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
            mt: 1,
            mb: 2,
          }}
        >
          <Text
            sx={{
              color: theme.text.secondary,
            }}
          >
            Posted{' '}
            {moment.duration(-moment().diff(article.pubDate)).humanize(true)}
          </Text>
          <Text
            sx={{
              color: theme.text.secondary,
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
          maxHeight: '360px',
          objectFit: 'cover',
          borderRadius: '0.6rem',
        }}
        alt=""
      />
    </Box>
  );
}
