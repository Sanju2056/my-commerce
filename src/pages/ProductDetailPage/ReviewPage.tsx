const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Mike Johnson",
      time: "5m",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames. Porttitor et sagittis egestas vitae metus, odio tristique amet, duis. Nunc tortor elit aliquet quis in mauris.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike Johnson",
      time: "5m",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames. Porttitor et sagittis egestas vitae metus, odio tristique amet, duis. Nunc tortor elit aliquet quis in mauris.",
      rating: 5,
    },
  ];

  return (
    <div className=" mx-auto ">
      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 border border-gray-200 rounded-2xl flex gap-4 bg-white"
          >
            {/* Avatar Placeholder */}
            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800">{review.name}</h4>
                <div className="flex text-gray-300 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? "text-gray-400" : ""}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                {review.content}
              </p>
              <div className="flex gap-4 mt-3 text-xs font-semibold text-gray-400">
                <button className="hover:text-gray-700">Like</button>
                <button className="hover:text-gray-700">Reply</button>
                <span>{review.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Review Form */}
      <div className="py-8 bg-gray-50 border border-gray-100 rounded-2xl space-y-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600">
                Your Name:
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 bg-white border border-gray-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600">
                Your Email:
              </label>
              <input
                type="email"
                placeholder="person@gmail.com"
                className="w-full p-3 bg-white border border-gray-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="ml-0 md:ml-16">
          <textarea
            placeholder="Write your review..."
            className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:ring-1 focus:ring-gray-300"
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">
              Your Ratings:
            </span>
            <div className="flex text-gray-300 text-lg cursor-pointer">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
          <button className="bg-black text-white px-8 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition shadow-sm">
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
