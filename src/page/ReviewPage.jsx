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
            const googleReviewUrl = "https://www.google.com/search?q=Aura+AutoCare+Reviews";
            window.open(googleReviewUrl, "_blank", "noopener,noreferrer");
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
            date: new Date().toLocaleString()
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
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
            }, 4000);
        } catch (error) {
            setError('Failed to send review. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#e80202]/5 mt-20 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full mt-20 max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl shadow-[#e80202]/30 overflow-hidden backdrop-blur-sm">
                    {/* Header Section */}
                    <div className="bg-[#e80202] px-6 sm:px-8 md:px-12 py-8">
                        <div className="text-center">
                            <div className="inline-block mb-4">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Rate Your Experience</h1>
                            <p className="text-white/90 text-base sm:text-lg font-medium">Your feedback helps us serve you better</p>
                        </div>
                    </div>

                    <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                        {/* Star Rating */}
                        <div className="mb-8 text-center">
                            <p className="text-gray-600 mb-6 text-sm sm:text-base font-medium">How would you rate our service?</p>
                            <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#e80202]/40 rounded-full p-1"
                                    >
                                        <svg
                                            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-200 ${star <= (hoveredRating || rating) ? 'text-[#e80202] fill-current drop-shadow-lg' : 'text-gray-300 fill-current'}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p className="mt-4 text-lg sm:text-xl font-semibold text-[#e80202] animate-pulse">
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
                            <div className="mb-6 bg-[#e80202]/10 border-2 border-[#e80202]/30 rounded-xl p-4 transition-opacity duration-300">
                                <p className="text-[#e80202] text-sm sm:text-base text-center font-medium">{error}</p>
                            </div>
                        )}

                        {/* Review Box - Inline Classes for Animation */}
                        {showReviewBox && !submitted && (
                            <div className="transition-all duration-500 ease-out transform translate-y-0 opacity-100">
                                <div className="bg-[#e80202]/5 rounded-2xl p-6 sm:p-8 border-2 border-[#e80202]/30 shadow-lg">
                                    <h2 className="text-xl sm:text-2xl font-bold text-[#e80202] mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Tell us more
                                    </h2>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your Name" className="w-full px-4 py-3 text-black rounded-xl border-2 border-[#e80202]/30 focus:border-[#e80202] focus:ring-4 focus:ring-[#e80202]/20 outline-none" />
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl text-black border-2 border-[#e80202]/30 focus:border-[#e80202] focus:ring-4 focus:ring-[#e80202]/20 outline-none" />
                                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number (Optional)" className="w-full px-4 py-3 rounded-xl border-2 text-black border-[#e80202]/30 focus:border-[#e80202] focus:ring-4 focus:ring-[#e80202]/20 outline-none" />
                                        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} required rows={5} placeholder="Please share your experience..." className="w-full px-4 py-3 rounded-xl border-2 text-black border-[#e80202]/30 focus:border-[#e80202] focus:ring-4 focus:ring-[#e80202]/20 outline-none resize-none" />
                                        <button disabled={loading} className={`w-full bg-[#e80202] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                            {loading ? 'Sending...' : 'Submit Review'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {submitted && (
                            <div className="transition-opacity duration-500 opacity-100 scale-100">
                                <div className="bg-[#e80202]/10 border-2 border-[#e80202]/30 rounded-2xl p-6 sm:p-8 text-center">
                                    <div className="inline-block bg-[#e80202]/20 rounded-full p-4 mb-4">
                                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#e80202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#e80202] mb-2">Thank You!</h3>
                                    <p className="text-[#e80202] text-base sm:text-lg">Your feedback has been sent to our team.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}