export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Flaha Creative
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are passionate photographers dedicated to capturing the beauty and emotion in every moment. 
              With years of experience and an eye for detail, we specialize in creating stunning visual stories 
              that you'll treasure forever.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From intimate portraits to grand celebrations, we bring creativity, professionalism, 
              and a personal touch to every project. Our goal is to exceed your expectations and 
              deliver photographs that truly reflect your unique story.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700 font-medium">Portrait Photography</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700 font-medium">Event Photography</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700 font-medium">Commercial Photography</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm">Your beautiful photo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}