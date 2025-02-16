export default function about() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">تواصل معي</h2>
      <div className="max-w-lg mx-auto">
        <form className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-600 hover:border-blue-500 transition-all duration-300"
>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">الاسم</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-600 hover:border-blue-500 transition-all duration-300"
              aria-label="اسم المستخدم" 
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-600 hover:border-blue-500 transition-all duration-300"
              aria-label="البريد الإلكتروني"
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">الرسالة</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              //هذا ts don't allow row ="4" 
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-600 hover:border-blue-500 transition-all duration-300"
              aria-label="اكتب رسالتك هنا"
            ></textarea>
          </div>

       
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            إرسال
          </button>
        </form>


      </div>
    </section>

  );
}
