import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Button, Chip, Divider, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";

import { setGlobalLoading } from "../../redux/features/globalLoadingSlice";
import { routesGen } from "../../routes/routes";

import uiConfigs from "../../configs/ui.configs";


import tmdbConfigs from "../../api/configs/tmdb.configs";
import genreApi from "../../api/modules/genre.api";
import mediaApi from "../../api/modules/media.api";
import CircularRate from "../common/CircularRate";


const media = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=2500w",
  }
]

const HomeSlide = ({ mediaType, mediaCategory }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      position: "relative",
      color: "primary.contrastText",
      "&::before": {
        content: '""',
        width: "100%",
        height: "30%",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: "none",
        ...uiConfigs.style.gradientBgImage[theme.palette.mode]
      }
    }}>
      <Swiper
        grabCursor={true}
        loop={true}
        // modules={[Autoplay]}
        style={{ width: "100%", height: "max-content" }}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false
      // }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{
              paddingTop: {
                xs: "130%",
                sm: "80%",
                md: "60%",
                lg: "45%"
              },
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundImage: `url(${item.img})`
            }} />
            <Box sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              ...uiConfigs.style.horizontalGradientBgImage[theme.palette.mode]
            }} />
            <Box sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              paddingX: { sm: "10px", md: "5rem", lg: "10rem" }
            }}>
              <Box sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingX: "30px",
                color: "text.primary",
                width: { sm: "unset", md: "30%", lg: "40%" },
                float: "right"
              }}>
                <Stack spacing={4} direction="column">
                  {/* <Typography
                    variant="h4"
                    fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                    fontWeight="700"
                    sx={{
                      ...uiConfigs.style.typoLines(2, "left")
                    }}
                  >
                    {item.title || item.name}
                  </Typography> */}


                  {/* buttons */}
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    component={Link}
                    to={routesGen.mediaDetail(mediaType, item.id)}
                    sx={{ width: "max-content" }}
                  >
                    Watch now
                  </Button>
                  {/* buttons */}
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HomeSlide;