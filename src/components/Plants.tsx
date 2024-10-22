export default function Plant() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-green-800 mb-10">
          Why Plants Matter
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Plants are essential for life on Earth. They give us food, oxygen, and beauty. Their importance stretches far beyond these basics.
        </p>

        <div className="space-y-8">
          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-green-700 text-xl mb-2">
              🌱 Oxygen Providers
            </h2>
            <p>
              Plants produce oxygen through photosynthesis, keeping the air we breathe clean and balanced.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-green-700 text-xl mb-2">
              🥗 Food for All
            </h2>
            <p>
              From fruits and vegetables to grains, plants form the foundation of the global food chain.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-green-700 text-xl mb-2">
              🌍 Climate Protectors
            </h2>
            <p>
              Plants absorb carbon dioxide, helping to fight climate change and keep our planet cool.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-green-700 text-xl mb-2">
              🏡 Homes for Wildlife
            </h2>
            <p>
              Forests and jungles provide shelter for countless species, supporting biodiversity worldwide.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-green-700 text-xl mb-2">
              🌸 Beauty and Well-being
            </h2>
            <p>
              Gardens and green spaces reduce stress, boost mood, and improve overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
