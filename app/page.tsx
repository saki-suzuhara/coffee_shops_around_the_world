import { coffeeShops } from "./data/coffeeShops";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
          Shanghai's Coffee Map
        </h1>
      </section>

      {/* Coffee Shop Cards */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {coffeeShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-amber-900"
            >
              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-2">{shop.name}</h2>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-start">
                    <span className="font-semibold text-amber-800 mr-2 min-w-fit">Location:</span>
                    <p className="text-gray-700">{shop.location}</p>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-amber-800 mr-2 min-w-fit">Beans:</span>
                    <p className="text-gray-700">{shop.coffeeBeans}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-amber-200 my-4"></div>

                {/* Commentary */}
                <p className="text-gray-600 leading-relaxed italic">{shop.commentary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
