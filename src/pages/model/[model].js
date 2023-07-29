import { useRouter } from "next/router";

import Head from "next/head";
import withRootLayout from "@/layouts/withRootLayout";
import { Fragment } from "react";

import ModelItem from "@/app/components/Model/ModelItem";
import ModelList from "@/app/components/Model/ModelList";

const Model = () => {
    const router = useRouter();
    const {model} = router.query;

    const lowerCaseQueryParam = model?.toLowerCase();
    return (
        <Fragment>
            {
                lowerCaseQueryParam === 'all' ? <ModelList /> : <ModelItem />
            }
        </Fragment>
    );
};

export default withRootLayout(Model);