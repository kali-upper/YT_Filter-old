import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';

const categories = [
  { path: '/entertainment', name: 'ترفيه' },
  { path: '/education', name: 'تعليم' },
  { path: '/religious', name: 'دينية' },
  { path: '/programming', name: 'برمجة' }
];

export const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.nav 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={category.path}
              className="block text-center py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              {category.name}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">مرحبًا بكم</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          لقد أصبحت منصات التواصل الإجتماعي مكانًا غير آمن للجميع
        </p>
        <p className="text-center text-gray-600 dark:text-gray-300">
          لذلك هذا الموقع هو عبارة عن مكتبة أولية لتصفية محتوى اليوتيوب من كل ما يخالف ديننا وأخلاقنا
        </p>
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <label
          htmlFor="upload-video"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg cursor-pointer hover:from-green-700 hover:to-green-900 transition-all"
        >
          <Upload className="h-5 w-5" />
          Upload Files
        </label>
        <input
          type="file"
          id="upload-video"
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              // Handle file upload
              console.log('File selected:', file);
            }
          }}
        />
      </motion.div>
    </div>
  );
};