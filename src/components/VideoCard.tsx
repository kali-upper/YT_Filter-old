import { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoCardProps } from '../types';

export const VideoCard = ({ videoId, title }: VideoCardProps) => {
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?controls=1`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <motion.div
      className={`video-card bg-gray-800 rounded-xl overflow-hidden shadow-lg ${
        isTheaterMode ? 'fixed inset-0 z-50 p-4 bg-black' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isTheaterMode ? 1 : 1.02 }}
    >
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoEmbedUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="p-6 bg-gray-800 text-white">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex gap-4">
          <motion.a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-blue-900 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Now
          </motion.a>
          <motion.button
            onClick={() => setIsTheaterMode(!isTheaterMode)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTheaterMode ? 'Exit Theater Mode' : 'Theater Mode'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};