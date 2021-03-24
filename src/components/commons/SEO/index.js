import Head from 'next/head';
import PropTypes from 'prop-types';

export function SEO({ headTitle }) {
    const pageTitleDefault = 'Instalura ';
    const hasHeadTitle = Boolean(headTitle);
    const title = hasHeadTitle
        ? (`${headTitle} | ${pageTitleDefault}`)
        : (pageTitleDefault);


    return (
        <Head>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <meta name="title" content={title} />
            <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
            <meta property="og:image" content="https://www.alura.com.br/assets/img/alura-share.1571848411.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
            <meta property="twitter:image" content="https://www.alura.com.br/assets/img/alura-share.1571848411.png" />
        </Head>
    );
}

SEO.defaultProps = {
    headTitle: '',
};

SEO.propTypes = {
    headTitle: PropTypes.string,
};