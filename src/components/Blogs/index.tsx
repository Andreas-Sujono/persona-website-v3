import React, { memo, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Grid } from '@mui/material';
import NavBar from '../Home/NavBar';
import Content from 'components/common/Container/Content';
import { useTheme } from 'hooks/common';
// import MainCard from './BlogCard/MainCard';
// import SideCard from './BlogCard/SideCard';
// import SearchBar from 'components/common/Form/SearchBar';
// import BlogCard from './BlogCard/CardV2';
import axios from 'axios';
import JoinMedium from 'components/Ads/JoinMedium';
// import Footer from 'components/Home/Footer';

const MainCard = dynamic(() => import('./BlogCard/MainCard'), {
  loading: () => <></>,
});
const SideCard = dynamic(() => import('./BlogCard/SideCard'), {
  loading: () => <></>,
});
const BlogCard = dynamic(() => import('./BlogCard/CardV2'), {
  loading: () => <></>,
});

const SearchBar = dynamic(() => import('components/common/Form/SearchBar'), {
  loading: () => <></>,
});

const Footer = dynamic(() => import('components/Home/Footer'), {
  loading: () => <></>,
});

export interface Article {
  title: string;
  description: string;
  thumbnail: string;
  pubDate: string;
  link: string;
  content?: string;
}

function BlogsPage({ articles }: { articles: Article[] }) {
  const theme = useTheme();
  const [searchInput, setSearchInput] = useState('');
  const [allArticles, setAllArticles] = useState(articles);
  const [searchRes, setSearchRes] = useState(articles || []);
  const searchRef = useRef<any>(null);

  // console.log('articles: ', articles);
  const mainArticle = allArticles[0];
  const sideArticle1 = allArticles[1];
  const sideArticle2 = allArticles[2];
  const finalArticles = searchInput ? searchRes : allArticles;

  const onSearch = (value: string) => {
    setSearchInput(value);
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      const regex = new RegExp(value, 'ig');
      // console.log(articles.filter((item) => item.title.match(regex)));
      setSearchRes(allArticles.filter((item) => item.title.match(regex)));
      searchRef.current = null;
    }, 100);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const res = await getStaticProps();
    const _articles = res?.props?.articles || [];
    setAllArticles(_articles);
  };

  return (
    <>
      <Box
        sx={{
          pb: '3rem',
        }}
      >
        <NavBar />
        <Box
          sx={{
            width: '100%',
            height: '30vw',
            position: 'absolute',
            background: theme.bg.secondary,
          }}
        />
        <Content
          sx={{
            position: 'relative',
            zIndex: 3,
            paddingX: '1rem',
            paddingTop: {
              md: 5,
              xs: 3,
            },
          }}
        >
          <Grid
            container
            sx={{ mt: 1, paddingX: '1rem' }}
            spacing={{
              md: 4,
              xs: 3,
            }}
          >
            <Grid item xs={12} md={6.5} sx={{}}>
              <MainCard article={mainArticle} />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <SideCard article={sideArticle1} />
              <SideCard
                mt={{
                  md: 1.8,
                  xs: 2.5,
                }}
                article={sideArticle2}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 3 }} spacing={1}>
            <Grid item xs={12} md={6.5} sx={{}}>
              <SearchBar
                fullWidth
                placeholder="Search blogs"
                onChange={(e) => onSearch(e.target.value)}
              />
              {finalArticles.map((article: Article, idx: number) => (
                <BlogCard
                  mt={idx === 0 ? 4 : 0}
                  mb={2}
                  article={article}
                  key={article.title}
                />
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                ml: {
                  md: '3rem',
                  xs: 0,
                },
                position: {
                  md: 'sticky',
                  xs: 'sticky',
                },
                top: '200px',
              }}
            >
              <Box
                sx={{
                  position: {
                    md: 'sticky',
                    xs: 'static',
                  },
                  top: '100px',
                }}
              >
                <JoinMedium />
              </Box>
            </Grid>
          </Grid>
        </Content>
      </Box>
      <Footer />
    </>
  );
}

const mapArticle: any = {};

export async function getStaticProps() {
  const url =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andreassujono';

  const feedReq = await axios.get(url);
  if (feedReq.status !== 200) return;

  const feed = feedReq.data;
  const parsedItems = feed.items.map((item: any) => {
    const { title } = item;
    if (mapArticle[title]) return { ...item, ...mapArticle[title] };
    return item;
  });

  return {
    props: { articles: parsedItems }, // will be passed to the page component as props
  };
}

export default memo(BlogsPage);
