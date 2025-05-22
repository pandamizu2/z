import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Box, ExternalLink, Image, Camera } from 'lucide-react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', icon: <Box className="w-4 h-4" /> },
    { id: '3d', name: '3D Products', icon: <Box className="w-4 h-4" /> },
    { id: 'design', name: 'Design Works', icon: <Instagram className="w-4 h-4" /> },
    { id: 'video', name: 'Video Edits', icon: <Youtube className="w-4 h-4" /> }
  ];

  const stockPlatforms = [
    {
      name: 'Freepik',
      icon: <Image className="w-5 h-5" />,
      url: 'https://www.freepik.com/author/koalagraphic',
      description: 'Vector illustrations and design resources'
    },
    {
      name: 'Shutterstock',
      icon: <Camera className="w-5 h-5" />,
      url: 'https://www.shutterstock.com/g/pandapediahome',
      description: 'Professional stock photos and vectors'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-shift bg-[length:200%_200%] text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Creative Portfolio</h1>
            <p className="text-xl text-white/80">
              Showcasing my journey through design, video editing, and 3D visualization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stock Platforms Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {stockPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
                  {platform.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{platform.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{platform.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-700">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Design Works */}
              {(activeCategory === 'all' || activeCategory === 'design') && designWorks.map((work, index) => (
                <motion.div
                  key={`design-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{work.title}</p>
                        <p className="text-white/80 text-sm mt-1">{work.description}</p>
                        <a
                          href={`/portfolio/${work.slug}`}
                          className="inline-flex items-center gap-1 text-white/90 text-sm mt-2 hover:text-white"
                        >
                          View Details <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* 3D Products */}
              {(activeCategory === 'all' || activeCategory === '3d') && productWorks.map((product, index) => (
                <motion.div
                  key={`3d-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium">{product.title}</p>
                        <p className="text-white/80 text-sm mt-1">{product.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.tools.map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-white/20 rounded-full text-white text-xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Video Works */}
              {(activeCategory === 'all' || activeCategory === 'video') && videoWorks.map((video, index) => (
                <motion.div
                  key={`video-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[3/4]">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold dark:text-white">{video.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{video.description}</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm mt-2 hover:underline"
                    >
                      Watch on YouTube <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

// Design works data with slugs for individual pages
const designWorks = [
  {
    title: "Brand Identity Design",
    description: "Modern branding concept with clean typography and bold colors",
    image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg",
    slug: "brand-identity"
  },
  {
    title: "Social Media Campaign",
    description: "Engaging content series for product launch",
    image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg",
    slug: "social-media-campaign"
  },
  {
    title: "Editorial Layout",
    description: "Magazine spread design with dynamic composition",
    image: "https://images.pexels.com/photos/1764436/pexels-photo-1764436.jpeg",
    slug: "editorial-layout"
  },
  {
    title: "Product Photography",
    description: "Minimalist product shots with natural lighting",
    image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg",
    slug: "product-photography"
  },
  {
    title: "Digital Illustration",
    description: "Custom artwork for marketing materials",
    image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg",
    slug: "digital-illustration"
  },
  {
    title: "UI/UX Design",
    description: "Mobile app interface with intuitive navigation",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    slug: "ui-ux-design"
  }
];

// Rest of the data remains the same
const productWorks = [
  {
    title: "Dish Soap Bottle",
    description: "Stylized transparent plastic bottle with colored liquid and realistic lighting",
    image: "https://i.imgur.com/NslPjJ3.png",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Minimalist Perfume Bottle",
    description: "Frosted glass material with subtle reflections for a luxury cosmetic look",
    image: "https://i.imgur.com/V6fpOW9.jpeg",
    tools: ["Blender", "Cycles", "Cosmetic"]
  },
  {
    title: "Whey Protein Jar",
    description: "High-detail product visualization with label design and soft studio lighting",
    image: "https://i.imgur.com/OKn8jFu.png",
    tools: ["Blender", "Cycles", "Packaging"]
  },
  {
    title: "Medical Box Icon",
    description: "Stylized 3D model of a medical first-aid box for icons or games",
    image: "https://i.imgur.com/mAt0oNx.jpeg",
    tools: ["Blender", "Cycles", "Stylized"]
  },
  {
    title: "Coca-Cola Can",
    description: "Realistic soda can design with branding and reflective aluminum material",
    image: "https://i.imgur.com/qUoTiaE.jpeg",
    tools: ["Blender", "Cycles", "Product"]
  },
  {
    title: "Smartphone Mockup",
    description: "Modern phone concept render with subtle glow and reflections",
    image: "https://i.imgur.com/rVQYIjW.jpeg",
    tools: ["Blender", "Cycles", "Tech"]
  }
];

const videoWorks = [
  {
    title: "Product Launch Teaser",
    description: "Dynamic short-form video showcasing new product features",
    embedUrl: "https://www.instagram.com/reel/DHpS3L7NGCg/embed",
    url: "https://www.instagram.com/reel/DHpS3L7NGCg/"
  },
  {
    title: "Brand Story",
    description: "Engaging narrative about brand values and mission",
    embedUrl: "https://youtube.com/embed/7X2TizWoY0s",
    url: "https://youtube.com/shorts/7X2TizWoY0s?si=O7xL21D9hSOUQWcZ"
  },
  {
    title: "Tutorial Series",
    description: "Quick tips and tricks for creative software",
    embedUrl: "https://youtube.com/embed/GFXxY-5m6Ek",
    url: "https://youtube.com/shorts/GFXxY-5m6Ek"
  }
];

export default PortfolioPage;