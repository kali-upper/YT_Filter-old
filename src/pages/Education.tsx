import { motion } from 'framer-motion';
import { VideoCard } from '../components/VideoCard';

export const Education = () => {
  const videos = [
    {
      id: "59HBoIXzX_c",
      title: "How Electric Motors Work - 3 phase AC induction motors ac motor"
    },
    {
      id: "GQatiB-JHdI",
      title: "How does an Electric Motor work? DC Motor explained"
    },
    {
      id: "d86ws7mQYIg",
      title: "How does Computer Hardware Work? 💻🛠🔬 [3D Animated Teardown]"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold text-center mb-8 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        فيديوهات تعليمية
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
        <p className="dark:text-gray-300" dir="rtl">
          يمكنك اقتراح فيديوهات عن طريق{" "}
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
