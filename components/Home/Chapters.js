import ChapterCard from "./ChapterCard";

const Chapters = ({ allGitaChapters }) => {
  return (
    <div className="chapters mt-14 mb-32">
      <div className="max-w-7xl mx-auto z-50 px-4 sm:px-6">
        <div className="">
          <h1 className="text-5xl font-bold">Chapters</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allGitaChapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
