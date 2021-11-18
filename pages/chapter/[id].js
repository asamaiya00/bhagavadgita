import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import Head from "next/head";
import { SortAscendingIcon, ChevronDownIcon } from "@heroicons/react/solid";
import VerseList from "../../components/Chapter/VerseList";
import { allGitaChaptersQuery, gitaChapterByIdQuery } from "../../data/queries";
import { getApolloClient } from "../../data/apollo";

export default function Chapter({ chapter }) {
  console.log(chapter);
  const verses = chapter?.gitaVersesByChapterId?.nodes || [];

  return (
    <div>
      <Head>
        <title>Bhagavad Gita App - Chapters</title>
        <link rel="icon" href="/favicon.ico" />
        <link ref="style" rel="stylesheet" href="/globals.css" />
      </Head>

      <div className="max-w-5xl font-inter py-24 chapter-intro mx-auto text-center  px-4 sm:px-6">
        <img
          src="../arrow-left.png"
          className="fixed z-neg top-1/2 md:top-1/3 left-3"
        />
        <img
          src="../arrow-right.png"
          className="fixed z-neg top-1/2 md:top-1/3 right-3"
        />

        <h3 className="text-my-orange font-medium uppercase">
          Chapter {chapter?.id}
        </h3>
        <h1 className="font-extrabold text-3xl my-8">
          {chapter?.nameTranslated}
        </h1>
        <p className="text-left  mt-3">{chapter?.chapterSummary}</p>
      </div>

      <div className="max-w-5xl font-inter mx-auto text-center  px-4 sm:px-6">
        <div className="flex items-center justify-between border-t py-6 border-b border-gray-200">
          <div className="font-extrabold">{chapter?.versesCount} Verses</div>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
              <input
                type="text"
                name="email"
                id="email"
                className="focus:ring-my-orange border focus:border-my-orange block w-full rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300"
                placeholder="Go To Verse"
              />
            </div>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
            >
              <SortAscendingIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Sort</span>

              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl font-inter py-8 mb-16 mx-auto   px-4 sm:px-6">
        {verses && verses.map((verse) => <VerseList verse={verse} />)}
      </div>
    </div>
  );
}

Chapter.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};

// export async function getStaticPaths() {
//   const apolloClient = getApolloClient();

//   const { data } = await apolloClient.query({
//     query: allGitaChaptersQuery,
//   });
//   const chapters = await data.allGitaChapters.nodes;
//   const paths = chapters.map((chapter) => ({
//     params: { id: chapter.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const apolloClient = getApolloClient();

//   const { data } = await apolloClient.query({
//     query: gitaChapterByIdQuery,
//     variables: {
//       id: parseInt(params.id),
//     },
//   });

//   return {
//     props: {
//       chapter: data.gitaChapterById,
//     },
//   };
// }

export const getServerSideProps = async ({ query }) => {
  const queryId = query.id;
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: gitaChapterByIdQuery,
    variables: { id: parseInt(queryId) },
  });
  return {
    props: { chapter: data.gitaChapterById, queryId },
  };
};
