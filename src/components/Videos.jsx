import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  console.log(videos);
  if (videos.length === 0) return <div>Loading...</div>;

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={2}>
      {videos.map((video, index) => (
        <Box
          key={index}
          sx={{
            width: { sx: "100%", md: "45%" },
            height: { sx: "auto", md: "45%" },
            position: "relative",
            cursor: "pointer",
          }}
        >
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetails={video} />}

        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
