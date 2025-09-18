import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export function Highlights() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Fetch GitHub profile
    fetch("https://api.github.com/users/arun-248")
      .then((response) => response.json())
      .then((data: UserProfile) => setUser(data));

    // Fetch top 3 repositories
    fetch(
      "https://api.github.com/users/arun-248/repos?sort=pushed&direction=desc&per_page=3"
    )
      .then((response) => response.json())
      .then((data) =>
        setRepos(
          data.map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            stars: repo.stargazers_count,
            forks: repo.forks,
            language: repo.language || "Unknown",
            html_url: repo.html_url,
          }))
        )
      );
  }, []);

  return (
    <SectionBackground>
      <section id="highlights">
        <div className="container mx-auto max-w-6xl px-8 space-y-20">
          <SectionTitle subtitle="Explore my coding journey: LeetCode 🧩, HackerRank 🏆, and GitHub 💻 contributions">
            Highlights
          </SectionTitle>

          {/* ================= LeetCode Section ================= */}
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-8">
              <SiLeetcode size={28} className="text-yellow-500" /> LeetCode
              Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LeetCode Activity Image */}
              <div className="relative w-full h-[18rem] md:h-[25rem] overflow-hidden">
                <img
                  src="https://leetcard.jacoblin.cool/arun248?theme=dark&font=Inter&ext=activity&border=2&radius=10"
                  title="LeetCode Activity"
                  className="absolute w-full h-full rounded-xl shadow-md"
                />
              </div>

              {/* LeetCode Journey Text */}
              <div>
                <h4 className="text-center text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  My LeetCode Journey
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Every day I challenge myself on LeetCode to strengthen my
                  problem-solving ability. I practice consistently, because I
                  believe progress is built over time, not overnight. My focus
                  spans across arrays, linked lists, trees, graphs, and dynamic
                  programming — each problem helps me uncover new strategies and
                  sharpen logical thinking. Some days I breeze through easy
                  problems, while other days I wrestle with harder ones — but
                  both experiences are valuable.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://leetcode.com/u/arun248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
                  >
                    <SiLeetcode className="w-5 h-5" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= HackerRank Section ================= */}
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-8">
              <FaHackerrank size={28} className="text-green-500" /> HackerRank
              Achievements
            </h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side → Stars (Python & SQL) */}
              <div className="space-y-8">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-6">
                  Badges & Stars
                </h4>

                <div className="flex items-center gap-4">
                  <FaHackerrank size={40} className="text-green-500" />
                  <div>
                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      Python – 5★
                    </p>
                    <p className="text-yellow-500 text-lg">★★★★★</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaHackerrank size={40} className="text-green-500" />
                  <div>
                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      SQL – 5★
                    </p>
                    <p className="text-yellow-500 text-lg">★★★★★</p>
                  </div>
                </div>
              </div>

              {/* Right side → Certifications */}
              <div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-6">
                  Verified Certifications
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Python (Basic)</li>
                  <li>Problem Solving (Basic)</li>
                  <li>Problem Solving (Intermediate)</li>
                  <li>SQL (Basic)</li>
                  <li>SQL (Intermediate)</li>
                  <li>SQL (Advanced)</li>
                  <li>Software Engineer (Role)</li>
                </ul>

                <div className="mt-6">
                  <a
                    href="https://www.hackerrank.com/profile/c_arun6278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    View HackerRank Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= GitHub Section ================= */}
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-8">
              <Github size={28} className="text-cyan-500" /> GitHub
              Contributions
            </h3>

            <div className="mb-10 flex flex-col items-center">
              <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                <GitHubCalendar
                  username="arun-248"
                  blockSize={14.6}
                  blockMargin={5}
                  colorScheme="light"
                  theme={{
                    light: [
                      "#e0e7ff",
                      "#6366f1",
                      "#4338ca",
                      "#312e81",
                      "#1e1b4d",
                    ],
                  }}
                />
              </div>
            </div>

            {/* Top Repositories */}
            <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {repo.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {repo.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-gray-500">
                    <span>{repo.language}</span>
                    <div className="flex space-x-4">
                      <span>⭐ {repo.stars}</span>
                      <span>🍴 {repo.forks}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* GitHub Profile */}
            {user && (
              <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt="GitHub Avatar"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      @{user.login}
                    </p>
                  </div>
                </div>

                <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6 max-w-xl break-words">
                  {user.bio ||
                    "Aspiring Data Scientist | AI & Machine Learning Enthusiast | Turning data into insights"}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                  <span className="flex items-center gap-1 text-sm">
                    👥 {user.followers} Followers
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    📦 {user.public_repos} Repos
                  </span>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all mt-3 md:mt-0"
                  >
                    <Github className="w-5 h-5" /> View Profile
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
