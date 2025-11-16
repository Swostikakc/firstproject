import React, { useState } from "react";

const Experience = () => {
  // State for form inputs and submission status
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'success', 'error', 'info'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle simulated form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !feedback) {
        setStatus({ message: 'Please fill out your name and feedback.', type: 'error' });
        return;
    }

    setIsSubmitting(true);
    setStatus({ message: 'Submitting feedback...', type: 'info' });

    // Simulate network delay for front-end experience
    setTimeout(() => {
        // Reset form and show success
        setName("");
        setFeedback("");
        setRating(5);
        setStatus({ message: 'Thank you! Your experience has been successfully submitted.', type: 'success' });
        setIsSubmitting(false);
        
        // Note: In a real app, the new testimonial object would be saved here.
    }, 1500);
  };


  // Sub-component for rendering and selecting stars
  const StarRating = ({ value, onChange, disabled = false }) => (
    <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <button
                key={star}
                type="button"
                onClick={() => !disabled && onChange(star)}
                className={`text-4xl transition-colors duration-200 ${
                    star <= value ? "text-[#FFC107]" : "text-gray-300 hover:text-[#FFD700]"
                } ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
                disabled={disabled}
            >
                ★
            </button>
        ))}
    </div>
  );

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8F8F5] font-sans">
      <div className="mt-16 pt-12 border-t border-gray-300">
        <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#2C2C2C]">Share Your Experience</h3>
            <p className="text-[#6B6B6B] mt-2">Help others by leaving a rating and review of our service.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-[#D4AF37]/30">
            
            {/* Rating Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2 text-center">Your Rating</label>
                <StarRating value={rating} onChange={setRating} disabled={isSubmitting} />
            </div>

            {/* Name Input */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-150"
                    placeholder="E.g., Bipin Shah"
                    disabled={isSubmitting}
                />
            </div>

            {/* Feedback Input */}
            <div className="mb-6">
                <label htmlFor="feedback" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Your Feedback
                </label>
                <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-150 resize-none"
                    placeholder="Tell us about your experience..."
                    disabled={isSubmitting}
                ></textarea>
            </div>

            {/* Status Message */}
            {status.message && (
                <div className={`p-3 mb-4 rounded-lg text-center ${
                    status.type === 'success' ? 'bg-green-100 text-green-700' : 
                    status.type === 'error' ? 'bg-red-100 text-red-700' : 
                    'bg-blue-100 text-blue-700'
                }`}>
                    {status.message}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#1A1F36] text-white font-semibold hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition-all"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    'Submit Review'
                )}
            </button>
        </form>
      </div>
    </section>
  );
};

export default Experience;
