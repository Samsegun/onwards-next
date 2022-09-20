/** @jsx jsx */

import Nav from "../src/components/nav";

export default function App({ Component, pageProps }) {
    // console.log(process.env.MY_ENV_VAR2);
    // console.log(process.env.HELP_URL);
    return (
        <div>
            <Nav />
            <Component {...pageProps} />
        </div>
    );
}
