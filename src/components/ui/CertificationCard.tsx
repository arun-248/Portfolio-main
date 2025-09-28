import React from "react";

type Props = {
  title: string;
  issuer?: string;
  date?: string;
  image: string;
  verifyLink?: string;
  certLink?: string;
};

export function CertificationCard({
  title,
  issuer,
  date,
  image,
  verifyLink,
  certLink,
}: Props) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Certificate Image - Best fix for your issue */}
      <div className="w-full flex justify-center items-center bg-gray-50" style={{ minHeight: "250px", maxHeight: "350px" }}>
        <img
          src={image}
          alt={title}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {issuer && (
          <p className="text-sm text-gray-300 mt-1">
            {issuer}{date ? ` • ${date}` : ""}
          </p>
        )}

        <div className="mt-4 flex gap-4">
          {verifyLink && (
            <a
              href={verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition"
            >
              Verify
            </a>
          )}
          {certLink && (
            <a
              href={certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition"
            >
              Open
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
