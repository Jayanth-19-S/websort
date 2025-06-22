import appImg from "../assets/app.png";
import marketImg from "../assets/market.png";
import webImg from "../assets/web.png";

const achievements = [
  {
    title: "Web Development",
    image: webImg,
  },
  {
    title: "App Development",
    image: appImg,
  },
  {
    title: "Digital Marketing",
    image: marketImg,
  },
];

export default function AchievementSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
        One of our proudest achievements.
      </h2>
      <p className="text-lg text-gray-200 mb-2 max-w-2xl text-center">
        A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution.
      </p>
      <p className="text-lg text-gray-200 mb-12 max-w-2xl text-center">
        It's a true reflection of our commitment to excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="bg-black/60 rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={ach.image}
              alt={ach.title}
              className="w-64 h-48 object-cover rounded mb-6 border border-gray-200"
            />
            <h3 className="text-2xl font-bold text-white mb-4 text-center">{ach.title}</h3>
            <button className="border border-gray-200 text-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-semibold">
              Explore more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
