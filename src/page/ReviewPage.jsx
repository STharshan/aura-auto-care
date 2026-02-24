import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ReviewPage() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleStarClick = (starRating) => {
        setRating(starRating);
        setError('');
        setSubmitted(false);
        setLoading(false);

        if (starRating <= 3) {
            setShowReviewBox(true);
        } else {
            setShowReviewBox(false);
            window.open(
                "https://www.google.com/search?sca_esv=0cca2ee0e671afa3&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=ANbL-n7WIJZwBQNu_qH3DMHp4etM__VzYQ:1770053718396&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWWvnlxyOtSbAodJocC3AZ7djdMLPvp1Ctj8ib8Ht94tYz-_tSKcdX1gQEKf14KIZlioCF97M0diIsgLsSNjFiIGyM5-Thur0U9tzj_6uXeIPQREhtQ%3D%3D&q=T+T+Autos+Leicester+Ltd+Reviews&sa=X&ved=2ahUKEwi29fj4q7uSAxU5m68BHZIyJH4Q0bkNegQIMhAF&biw=1366&bih=633&dpr=1&aic=0",
                "_blank",
                "noopener,noreferrer"
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const templateParams = {
            to_name: 'Business Owner',
            customer_name: name,
            customer_email: email,
            customer_phone: phone || 'Not provided',
            rating: rating,
            review_text: reviewText,
            star_rating: '⭐'.repeat(rating),
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', response);
            setLoading(false);
            setSubmitted(true);

            setTimeout(() => {
                setRating(0);
                setShowReviewBox(false);
                setReviewText('');
                setName('');
                setEmail('');
                setPhone('');
                setSubmitted(false);
                setLoading(false);
            }, 4000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setError('Failed to send review. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#861918]/5 mt-20 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full mt-20 max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl shadow-[#861918]/30 overflow-hidden backdrop-blur-sm">
                    {/* Header Section */}
                    <div className="bg-[#861918] px-6 sm:px-8 md:px-12 py-8">
                        <div className="text-center">
                            <div className="inline-block mb-4">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                                Rate Your Experience
                            </h1>
                            <p className="text-white/90 text-base sm:text-lg font-medium">
                                Your feedback helps us serve you better
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                        {/* Star Rating */}
                        <div className="mb-8">
                            <p className="text-center text-gray-600 mb-6 text-sm sm:text-base font-medium">
                                How would you rate our service?
                            </p>
                            <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#861918]/40 rounded-full p-1"
                                        aria-label={`Rate ${star} stars`}
                                    >
                                        <svg
                                            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-200 ${star <= (hoveredRating || rating)
                                                ? 'text-[#861918] fill-current drop-shadow-lg'
                                                : 'text-gray-300 fill-current'
                                                }`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p className="text-center mt-4 text-lg sm:text-xl font-semibold text-[#861918] animate-fade-in">
                                    {rating === 1 && "We're sorry to hear that 😢"}
                                    {rating === 2 && "We can do better 😕"}
                                    {rating === 3 && "Thanks for your feedback 🙂"}
                                    {rating === 4 && "Great! Thank you! 😊"}
                                    {rating === 5 && "Excellent! We appreciate you! 🌟"}
                                </p>
                            )}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 bg-[#861918]/10 border-2 border-[#861918]/30 rounded-xl p-4 animate-fade-in">
                                <p className="text-[#861918] text-sm sm:text-base text-center font-medium">
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Review Box */}
                        {showReviewBox && !submitted && (
                            <div className="animate-slide-down">
                                <div className="bg-[#861918]/5 rounded-2xl p-6 sm:p-8 border-2 border-[#861918]/30 shadow-lg">
                                    <h2 className="text-xl sm:text-2xl font-bold text-[#861918] mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-[#861918]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Tell us more
                                    </h2>
                                    <p className="text-[#861918]/80 mb-6 text-sm sm:text-base">
                                        We'd love to hear your feedback so we can improve our service.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name, Email, Phone, Review Text Inputs */}
                                        <div>
                                            <label className="block text-sm font-semibold text-[#861918] mb-2">Your Name *</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 text-black rounded-xl border-2 border-[#861918]/30 focus:border-[#861918] focus:ring-4 focus:ring-[#861918]/20 outline-none text-sm sm:text-base"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-[#861918] mb-2">Your Email *</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 rounded-xl text-black border-2 border-[#861918]/30 focus:border-[#861918] focus:ring-4 focus:ring-[#861918]/20 outline-none text-sm sm:text-base"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-[#861918] mb-2">Phone Number <span className="text-[#861918]/60 text-xs">(Optional)</span></label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border-2 text-black border-[#861918]/30 focus:border-[#861918] focus:ring-4 focus:ring-[#861918]/20 outline-none text-sm sm:text-base"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-[#861918] mb-2">Your Feedback *</label>
                                            <textarea
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl border-2 text-black border-[#861918]/30 focus:border-[#861918] focus:ring-4 focus:ring-[#861918]/20 outline-none resize-none text-sm sm:text-base"
                                                placeholder="Please share your experience with us..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full bg-[#861918] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-[#861918]/40 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {loading ? 'Sending...' : 'Submit Review'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {submitted && (
                            <div className="animate-fade-in">
                                <div className="bg-[#861918]/10 border-2 border-[#861918]/30 rounded-2xl p-6 sm:p-8 text-center">
                                    <div className="inline-block bg-[#861918]/20 rounded-full p-4 mb-4">
                                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#861918]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#861918] mb-2">Thank You!</h3>
                                    <p className="text-[#861918] text-base sm:text-lg">
                                        Your feedback has been sent to our team.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slide-down { animation: slide-down 0.4s ease-out; }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
            `}</style>
        </div>
    );
}
