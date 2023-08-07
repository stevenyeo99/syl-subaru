import { useRouter } from "next/router";
import Head from 'next/head';
import { Fragment, useState } from "react";

import withRootLayout from "@/layouts/withRootLayout";
import NewsItem from "@/app/components/News/NewsItem";
import NewsList from "@/app/components/News/NewsList";
import NewsBarLayout from "@/layouts/newsBarLayout";
import { ListOfNews } from "@/app/data/news/ListOfNews";

const LIST_TYPE = [
    'all',
    'artikel',
    'berita',
    'liputan_media',
    'promo',
    'tips',
    'all'
];

const News = () => {

    const [searchValue, setSearchValue] = useState('');

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

    let latestListOfNews = ListOfNews.sort((a, b) => b - a).filter(data => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    latestListOfNews = (LIST_TYPE.includes(lowerCaseQueryParam) && lowerCaseQueryParam !== 'all') ?
        latestListOfNews.filter(data => {
            if (data.type.includes(lowerCaseQueryParam.toLocaleUpperCase())) {
                return true;
            }

            return false;
        }) : latestListOfNews;
    
    console.log(latestListOfNews);

    const onChangeHandler = (event) => {
        setSearchValue(event.target.value);
    }

    const isDisplayList = LIST_TYPE.includes(lowerCaseQueryParam) || isNaN(lowerCaseQueryParam);
    const listTitle = ((LIST_TYPE.includes(lowerCaseQueryParam) && lowerCaseQueryParam !== 'all')) ? lowerCaseQueryParam.toLocaleUpperCase() : null;

    return (
        <Fragment>
            <Head>
                <title> 
                    {
                        `${lowerCaseQueryParam ==='all' ? 'Info & Promo Subaru Batam' : (newDetail ? `Info | ${newDetail.title} ` : `${lowerCaseQueryParam} | Subaru Batam`)}`
                    } 
                </title>
            </Head>

            <NewsBarLayout isDisplayList={isDisplayList} type='news' onChangeHandler={onChangeHandler} activeClass={lowerCaseQueryParam}>
                {
                    (isDisplayList) ? (
                        <NewsList listType={listTitle} items={latestListOfNews} />
                    ) : (
                        <NewsItem item={newDetail} />
                    )
                }
            </NewsBarLayout>
        </Fragment>
    );
};

export default withRootLayout(News);