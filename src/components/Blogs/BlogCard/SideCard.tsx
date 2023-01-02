import Text from 'components/common/Text';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import { Article } from '..';

interface Props {
  mt?: number | string;
  article: Article;
}

export default function SideCard({ mt = 0, article }: Props) {
  const theme = useTheme();
  return (
    <Box sx={{ mt, boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.09)' }}>
      <Text
        sx={{
          fontSize: '1.1rem',
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
          Posted 1 Month ago
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
    </Box>
  );
}
