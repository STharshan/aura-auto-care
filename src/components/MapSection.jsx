// components/MapSection.jsx
export default function MapSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-[#861918] text-center">
          Find Us
        </h2>
        <iframe
          className="w-full h-80 rounded-2xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.193850142686!2d-1.1155709999999999!3d52.638410699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776146e6f563e9%3A0x205103aac7960b1d!2sT%20T%20Autos%20Leicester%20Ltd!5e0!3m2!1sen!2slk!4v1770053650948!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
