type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  certificate?: string;
};

export function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
  certificate,
}: ExperienceProps) {
  return (
    <div className="pl-6 relative">
      {/* Timeline dot */}
      <div className="absolute -left-3 top-2 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full border-2 border-white"></div>

      {/* Experience content */}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{company}</p>
      <p className="text-sm text-gray-500">{period}</p>

      <p className="mt-3 text-gray-700 dark:text-gray-200 whitespace-pre-line">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Certificate link */}
      {certificate && (
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Certificate
        </a>
      )}
    </div>
  );
}
