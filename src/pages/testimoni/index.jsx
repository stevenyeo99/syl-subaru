import Head from "next/head";
import { Fragment } from "react";

import withRootLayout from "@/layouts/withRootLayout";
import ComingSoon from "@/app/components/ComingSoon/ComingSoon";

const Testimoni = () => {
    return (
        <Fragment>
            <Head>
                <title>Testimoni Subaru</title>
            </Head>
            {
                <ComingSoon />
            }
        </Fragment>
    )
};

export default withRootLayout(Testimoni);