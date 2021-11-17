import { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../components/Home/Banner";
import List from "../components/List";

import Chapters from "../components/Home/Chapters";
import Newsletter from "../components/Home/Newsletter";
import VerseOfDay from "../components/Home/VerseOfDay";
import HomeLayout from "../layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { QUERY } from "../data/apollo";

export default function Home() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { data, loading, error } = useQuery(QUERY);

  console.log({ loading, error });

  // On page load, the `networkStatus` should be NetworkStatus.ready ( `7` ) if the data is in the cache, and the page should not need to re-render.
  const [cached, setCached] = useState(true);

  useEffect(() => {
    if (loading) setCached(false);
  }, [loading]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="font-inter min-h-screen py-2">
      <Head>
        <title>Bhagwat Gita App</title>
        <link rel="icon" href="/favicon.ico" />
        <link ref="style" rel="stylesheet" href="/globals.css" />
      </Head>

      <main className="">
        <p>
          This page's data was fetched on the{" "}
          <strong>{cached ? "Next.js server" : "client"}</strong>.
        </p>

        <HomeLayout>
          <Banner />
          <VerseOfDay />
          <Newsletter />
          <Chapters />
        </HomeLayout>
      </main>
    </div>
  );
}
