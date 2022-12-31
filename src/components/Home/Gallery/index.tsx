import { Box } from '@mui/material';
import React, { memo } from 'react';
import Text from 'components/common/Text';
import Card from './Card';
import galleryData from './data';
import { useTheme } from 'hooks/common';
import Content from 'components/common/Container/Content';

function Gallery() {
  const column = [1, 2, 3];
  const { length } = galleryData;
  const columnLength = column.length;
  const galleryChosen = (idx: number) =>
    galleryData.slice(
      parseInt((length / columnLength).toString()) * idx,
      parseInt((length / columnLength).toString()) * (idx + 1)
    );
  const theme = useTheme();

  return (
    <Box
      id="gallery"
      sx={{
        paddingY: '4rem',
        overflow: 'hidden',
      }}
    >
      <Content>
        <Text
          sx={{
            zIndex: 2,
            fontSize: '1.8rem',
            color: theme.text.highlight,
            fontFamily: 'Rock Salt',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          Gallery
        </Text>
      </Content>

      <Box
        sx={{
          display: 'flex',
          mt: 3,
        }}
      >
        {column.map((_, idx1) => (
          <div className="galleryColumn" key={Math.random()}>
            {galleryChosen(idx1).map((item2) => (
              <Card image={item2.image} alt={item2.alt} key={Math.random()} />
            ))}
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default memo(Gallery);
