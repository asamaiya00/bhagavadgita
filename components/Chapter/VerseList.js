import React from "react";

const VerseList = ({ verse }) => {
  return (
    <div className="flex">
      <dl className="">
        <div className=" sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6 hover:bg-box-bg rounded-lg">
          <dt className="text-sm font-medium text-my-orange uppercase">
            Verse {verse?.verseNumber}
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4">
            {verse?.gitaTranslationsByVerseId?.nodes[0]?.description}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default VerseList;
