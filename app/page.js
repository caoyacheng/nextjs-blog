"use client"
import { Button } from "@/components/ui/button";

export default function Home() {
  // Create reference to store the DOM element containing the animation

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            <span className="font-serif text-5xl">AI新闻和大模型知识学习</span><br className="hidden lg:block" />
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            <span className="font-serif">这里有前沿的AI新闻和大模型知识</span> <br className="hidden lg:block" /> 支撑AI+DICT项目｜提供人工智能产品｜提供专家咨询服务
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>


      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
                <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};








