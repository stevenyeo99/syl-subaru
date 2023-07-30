import { useRouter } from "next/router";

import Head from "next/head";
import withRootLayout from "@/layouts/withRootLayout";
import { Fragment } from "react";

import ModelItem from "@/app/components/Model/ModelItem";
import ModelList from "@/app/components/Model/ModelList";
import NewsBarLayout from "@/layouts/newsBarLayout";

const Model = () => {
    const router = useRouter();
    const {model} = router.query;

    const lowerCaseQueryParam = model?.toLowerCase();
    return (
        <Fragment>
            <Head>
                <title>{`${lowerCaseQueryParam ==='all' ? 'Semua Model Mobil' : `Model | ${model} `}`}</title>
            </Head>
            {
                lowerCaseQueryParam === 'all' ? <ModelList /> : <NewsBarLayout><ModelItem model={lowerCaseQueryParam} /></NewsBarLayout>
            }
        </Fragment>
    );
};

export default withRootLayout(Model);