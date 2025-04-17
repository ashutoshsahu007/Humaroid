import React from "react";
import YouTubeModalPlayer from "../Youtube/YoutubePlayer";

const PatientStories = () => {
  return (
    <div className="px-10 my-10">
      <div>
        <h2 className="text-4xl font-bold  text-blue-900 mb-10 text-center">
          Patient Stories
        </h2>
      </div>
      <div className="grid lg:grid-cols-5 gap-4 ">
        <div className="flex items-center">
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 items-center">
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
        </div>
        <div className="flex flex-col justify-center  gap-4">
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 items-center ">
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
        </div>
        <div className="flex items-center">
          <YouTubeModalPlayer
            videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            thumbnailUrl="https://medanta.s3.ap-south-1.amazonaws.com/stories/October2023/lIoyJj9TzUen1wlCjk3XPFgRfzG2QN-metaNC5qcGc=-.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientStories;
