import { useRouter } from "next/router";
import Head from 'next/head';
import { Fragment } from "react";

import withRootLayout from "@/layouts/withRootLayout";
import NewsItem from "@/app/components/News/NewsItem";
import NewsList from "@/app/components/News/NewsList";
import NewsBarLayout from "@/layouts/newsBarLayout";
import { ListOfNews } from "@/app/data/news/ListOfNews";

const News = () => {
    const router = useRouter();
    const {news: id} = router.query;

    const lowerCaseQueryParam = id?.toLowerCase();

    const newDetail = ListOfNews.find(data => {
        let isValiddata = false;
        try {
            isValiddata = data.id === Number(lowerCaseQueryParam)
        } catch (err) {
           
        }
        return isValiddata;
    });

    const latestListOfNews = ListOfNews.sort((a, b) => b - a);

    return (
        <Fragment>
            <Head>
                <title> 
                    {
                        `${lowerCaseQueryParam ==='all' ? 'Info & Promo Subaru Batam' : (newDetail ? `Info | ${newDetail.title} ` : `${lowerCaseQueryParam} | Subaru Batam`)}`
                    } 
                </title>
            </Head>

            <NewsBarLayout type='news'>
                {
                    (lowerCaseQueryParam === 'all' || isNaN(lowerCaseQueryParam)) ? (
                        <NewsList items={latestListOfNews} />
                    ) : (
                        <NewsItem item={newDetail} />
                    )
                }
            </NewsBarLayout>
        </Fragment>
    );
};

export default withRootLayout(News);