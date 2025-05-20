import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800 py-24">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
        About Our Store
      </h1>

      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to Tendify! We started with a simple mission: to bring you
            the best quality products at affordable prices. Our passion drives
            us to handpick every item to ensure you get nothing but the best.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about2.jpg"
            alt="Our story"
            width={600}
            height={360}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/abou1.jpg"
            alt="Quality products"
            width={600}
            height={360}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Quality You Can Trust
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Quality is at the heart of everything we do. Our products go through
            rigorous checks to ensure durability and style. Your satisfaction is
            our priority.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Customer First
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We believe in building a community. Your feedback and happiness
            inspire us to keep improving and growing together.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about3.jpg"
            alt="Customer service"
            width={600}
            height={360}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
