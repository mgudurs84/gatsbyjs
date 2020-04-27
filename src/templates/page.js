import React from 'react';
import Layout from '../components/layout'

export default({pageContext}) => (
<Layout>
    <div className="SectionBanner">
        <img src="https://www.guidewellsource.com/images/section_banner.jpg"/>
    </div>
    <div className="SectionBannerTitle">{pageContext.title}</div>
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
</Layout>
);