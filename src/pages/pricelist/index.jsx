import Head from "next/head";
import { Fragment } from "react";

import withRootLayout from "@/layouts/withRootLayout";
import ComingSoon from "@/app/components/ComingSoon/ComingSoon";

const PriceList = () => {
    return (
        <Fragment>
            <Head>
                <title>Price List Subaru</title>
            </Head>
            {
                <ComingSoon />
            }
        </Fragment>
    )
};

export default withRootLayout(PriceList);