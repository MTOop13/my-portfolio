import Image from "next/image";

export default function Projects() {
  return (


    < section className="mt-20" >
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">مشاريعي</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
        
              <div className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-500 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <Image src="/project1.jpg" alt="مشروع 1" width={400} height={200} className="rounded-md shadow-lg" />
                <h3 className="text-xl font-semibold mt-4 text-white">مشروع 1</h3>
                <p className="text-gray-200">وصف مختصر للمشروع الأول.</p>
                <a href="#" className="text-blue-300 mt-2 inline-block hover:text-blue-500 transition-colors duration-300">رابط للمشروع</a>
              </div>

            
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <Image src="/project2.jpg" alt="مشروع 2" width={400} height={200} className="rounded-md  shadow-lg " />
                <h3 className="text-xl font-semibold mt-4 text-white">مشروع 2</h3>
                <p className="text-gray-200">وصف مختصر للمشروع الثاني.</p>
                <a href="#" className="text-blue-300 mt-2 inline-block hover:text-blue-500 transition-colors duration-300">رابط للمشروع</a>
              </div>

            
              <div className="bg-gradient-to-r from-indigo-500 via-blue-600 to-green-500 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <Image src="/project3.jpg" alt="مشروع 3" width={400} height={200} className="rounded-md shadow-lg justify-center" />
                <h3 className="text-xl font-semibold mt-4 text-white">مشروع 3</h3>
                <p className="text-gray-200">وصف مختصر للمشروع الثالث.</p>
                <a href="#" className="text-blue-300 mt-2 inline-block hover:text-blue-500 transition-colors duration-300">رابط للمشروع</a>
              </div>
            </div>
          </section >
  );
}
