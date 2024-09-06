"use client"

import SupportForm from '@/components/SupportForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [showSupportForm, setShowSupportForm] = useState(false);

  const handleSupportClick = () => {
    setShowSupportForm(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo2.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">关于我们</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                你好！我是小曹，一位热衷于人工智能的技术人员。在这里分享我在AI和各种前沿技术领域的经验、技巧和教程。我精通机器学习、深度学习、自然语言处理等AI技术，同时对云计算、大数据和物联网等新兴技术也有深入研究。我相信学习是一个持续的旅程，我希望通过这个平台帮助更多人掌握AI和编程技能，共同探索科技的无限可能。
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                同时我们团队也会提供各类AI相关DICT支撑服务，包括顶层规划、项目支撑、技术支撑、定制开发、产品交付等，您有任何问题都可以与我们取得联系！
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleSupportClick}
          >
            需要支撑
          </Button>
        </div>
      </div>

      {showSupportForm && <SupportForm onClose={() => setShowSupportForm(false)} />}

      {/* <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Harry's Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here's how Harry navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/3.jpg" alt="Harry as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Harry’s coding journey began in high school when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Harry spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/2.jpg" alt="Harry learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Harry’s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Harry quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/1.jpg" alt="Harry working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With several years of experience under his belt, Harry began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Harry continued to push his limits, always looking for opportunities to learn and grow. His journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/4.jpg" alt="Harry mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Harry is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Harry, coding is more than just a profession—it’s a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
