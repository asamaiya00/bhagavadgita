import { gql } from "@apollo/client";

export const allGitaLanguagesQuery = gql`
  query {
    allGitaLanguages {
      edges {
        node {
          id
        }
      }
    }
  }
`;
export const allGitaChaptersQuery = gql`
  query {
    allGitaChapters {
      nodes {
        id
        versesCount
        chapterNumber
        nameTranslated
        chapterSummary
      }
    }
    gitaChapterById(id: 1) {
      chapterNumber
      nameTranslated
      chapterSummary
      gitaVersesByChapterId {
        nodes {
          chapterNumber
          verseNumber
          gitaTranslationsByVerseId(
            condition: { language: "english", authorName: "Swami Sivananda" }
          ) {
            nodes {
              description
              verseId
            }
          }
        }
      }
    }
  }
`;

export const gitaChapterByIdQuery = gql`
  query gitaChapterByIdQuery($id: Int!) {
    gitaChapterById(id: $id) {
      id
      chapterNumber
      nameTranslated
      chapterSummary
      versesCount
      gitaVersesByChapterId {
        nodes {
          chapterNumber
          verseNumber
          gitaTranslationsByVerseId(
            condition: { language: "english", authorName: "Swami Sivananda" }
          ) {
            nodes {
              description
              verseId
            }
          }
        }
      }
    }
  }
`;
