// components/MapSection.jsx
export default function MapSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-[#e80202] text-center">
          Find Us
        </h2>
        <iframe
          className="w-full h-80 rounded-2xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235158.3203782684!2d-0.83805455!3d52.79679135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c163f557c2cd%3A0xc4b7ef80fa9f68d5!2sAura%20AutoCare!5e0!3m2!1sen!2slk!4v1771957906270!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
