import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#e80202] mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Page not found
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          The page you were looking for does not exist or may have been moved.
          Try heading back to the home page.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#e80202] px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            Go home
          </Link>
          <Link
            to="/review"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-white/10"
          >
            Leave a review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
