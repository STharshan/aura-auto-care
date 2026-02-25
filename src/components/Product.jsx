import { Phone, Mail, MapPin, CircleCheckBig } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function ProtectionPackages() {
  // Protection Package Data
  const protectionPackages = [
    {
      type: "Essential 3 Year Protection Package",
      price: "£450",
      description:
        "New cars or daily drivers needing long-term gloss and easy maintenance.",
      features: [
        "Full exterior wash & decontamination (iron & tar removal, clay bar treatment)",
        "Single-stage machine polish to enhance gloss",
        "Application of Carbon Collective Platinum Ceramic Coating on paintwork (up to 3-year durability)",
        "Carbon Collective Platinum Wheels coating applied to faces of wheels",
        "Carbon Collective Glass Coating applied to all exterior glass",
        "Carbon Collective Trim Coating applied to exterior plastics and trims",
      ],
      benefits: [
        "Deep, glossy finish that stays cleaner for longer",
        "UV & chemical protection against environmental damage",
        "Hydrophobic surface for effortless washing",
      ],
      btnText: "Book Essential Package",
      iconColor: "text-[#e80202]",
      bgColor: "bg-[#e80202]/20",
      borderColor: "border-[#e80202]/30",
    },
    {
      type: "Advanced 5 Year Protection Package",
      price: "£600",
      description: "Enthusiasts seeking premium protection, durability, and a show-car finish.",
      features: [
        "Multi-stage wash inside & out with full decontamination",
        "1–2 stage paint correction for improved clarity and depth",
        "Application of Carbon Collective Nero Self-Healing Ceramic Coating (up to 5-year protection)",
        "Carbon Collective Platinum Wheels coating on faces & barrels",
        "Carbon Collective Glass coating on all exterior glass",
        "Carbon Collective trim Coating on exterior plastics & trims",
      ],
      benefits: [
        "Ultra-deep gloss with swirl & light scratch resistance",
        "Long-lasting protection on all exterior surfaces",
        "Enhanced chemical, UV, and heat resistance",
      ],
      btnText: "Book Advanced Package",
      iconColor: "text-red-500",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
    },
    {
      type: "Signature 7 Year Protection Package",
      price: "£750",
      description: "Show vehicles or owners wanting the ultimate, full-body ceramic protection.",
      features: [
        "Multi-Stage Wash inside & out with Full decontamination",
        "Full multi-stage paint correction for defect removal & mirror clarity",
        "Application of Carbon Collective Molecule 9H Coating topped",
        "Carbon Collective Platinum Wheels coating on faces, barrels & calipers",
        "Carbon Collective Glass Coating for superior visibility",
        "Carbon Collective exterior Coating on trims & plastics",
        "Carbon Collective Seat & Fabric Protect and Leather Guard for interior protection",
      ],
      benefits: [
        "Complete vehicle protection, inside and out",
        "Unrivalled gloss and depth of finish",
        "Longest-lasting ceramic system in the Carbon Collective range",
      ],
      btnText: "Book Signature Package",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
    },
  ];

  // Contact links
  const contactLinks = [
    { icon: <Phone className="h-6 w-6" />, title: "+44 7305 794353", href: "tel:+447305794353" },
    { icon: <Mail className="h-6 w-6" />, title: "auraautocare1@gmail.com", href: "mailto:auraautocare1@gmail.com" },
    { icon: <MapPin className="h-6 w-6" />, title: "Our Location",   href:"https://maps.app.goo.gl/e1S2etqinvH3EkZr7" },
  ];

  return (
    <section id="package" className="scroll-m-10 bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        
        {/* LEFT COLUMN */}
        <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit self-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-[#e80202]"></div>
              <h6 className="text-xs sm:text-sm font-semibold text-[#e80202] uppercase tracking-wider">
                Discover Our Complete Car Protection Packages
              </h6>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Premium Protection Packages for Your Vehicle
            </h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Choose from our top-tier protection packages to keep your vehicle in showroom condition for years.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-3">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-10 w-10 text-[#e80202]">
                  {link.icon}
                </div>
                <div>
                  <h6 className="text-base font-semibold group-hover:text-[#e80202] transition-colors">
                    {link.title}
                  </h6>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10 mt-10 lg:mt-0">
          {/* Packages */}
          {protectionPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl bg-linear-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#e80202]/40 hover:shadow-[0_0_25px_rgba(134,25,24,0.25)] transition-all duration-500"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h6 className="text-sm font-semibold text-gray-400">{pkg.type}</h6>
              </div>

              <div className="border border-white/10 rounded-lg p-5 mb-6 flex flex-wrap items-center justify-between bg-[#111]">
                <h6 className="text-sm font-semibold text-gray-400">PACKAGE</h6>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#e80202]">{pkg.price}</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Perfect for: </strong> {pkg.description}
                </div>
                <div>
                  <strong className="text-white">Features:</strong>
                  <ul className="space-y-2 mt-3 text-gray-300">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CircleCheckBig  className="h-5 w-5 text-[#e80202]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Benefits:</strong>
                  <ul className="space-y-2 mt-3 text-gray-300">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CircleCheckBig className="h-5 w-5 text-[#e80202]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <HashLink
                to="/#contact"
                smooth
                className="w-full block bg-[#e80202] hover:bg-[#a51f1e] text-white font-semibold py-3 rounded-full transition-all duration-300 border-2 border-[#e80202] hover:border-[#a51f1e] shadow-lg shadow-[#e80202]/40 hover:shadow-[#e80202]/60 text-sm sm:text-base text-center"
              >
                {pkg.btnText}
              </HashLink> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
