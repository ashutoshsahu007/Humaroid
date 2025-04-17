import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Loader2, X } from "lucide-react";

const YouTubeModalPlayer = ({ videoUrl, thumbnailUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const playerRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        onClick={openModal}
        className="relative w-full max-w-xl mx-auto h-[212px] aspect-video cursor-pointer rounded-2xl overflow-hidden shadow-lg"
      >
        <img src={thumbnailUrl} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-[#4e9bc4]">
          <motion.div
            className="text-lg font-semibold mb-3 text-[#4e9bc4]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Click to Watch
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Play size={48} />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Video container */}
            <motion.div
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                playing={isPlaying}
                controls={false}
                width="100%"
                height="100%"
                onBuffer={() => setIsBuffering(true)}
                onBufferEnd={() => setIsBuffering(false)}
              />

              {/* Spinner during buffer */}
              <AnimatePresence>
                {isBuffering && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="text-white"
                    >
                      <Loader2 size={40} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Play/Pause Button */}
              <motion.button
                className="absolute bottom-4 right-4 p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition"
                onClick={togglePlay}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default YouTubeModalPlayer;
