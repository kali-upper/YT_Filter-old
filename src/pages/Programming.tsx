import { motion } from 'framer-motion';
import { VideoCard } from '../components/VideoCard';

export const Programming = () => {
  const videos = [
    {
      id: "8mAITcNt710",
      title: "Harvard CS50 – Full Computer Science University Course"
    },
    {
      id: "XKHEtdqhLK8",
      title: "Python Full Course for free 🐍"
    },
    {
      id: "dqlO6_5rZSQ",
      title: "I tried 50 Programming Courses. Here are Top 5."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold text-center mb-8 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        فيديوهات برمجة
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-4 dark:text-white">سيتم إضافة المزيد من الفيديوهات قريباً</h3>
        <p className="dark:text-gray-300">
          يمكنك إقتراح فيديوهات عن طريق{' '}
          <a 
            href="https://wa.me/+201207688761" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <bdi>واتساب</bdi>
          </a>
        </p>
      </motion.div>
    </div>
  );
};
