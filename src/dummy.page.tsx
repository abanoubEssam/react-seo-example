import React, { FunctionComponent } from 'react'
import SEO from 'react-seo-component';

interface DummyPageProps {
    
}
 
const DummyPage: FunctionComponent<DummyPageProps> = () => {
    return ( 
        <>
        <SEO 
        title={"title"}
        titleTemplate={"siteName"}
        titleSeparator={`-`}
        description={"description"}
        pathname={"siteUrl"}
        siteLanguage={"EN"}
        twitterUsername={""}
        siteLocale={""}
        article={false}
        author={"Abanoub"}
        dateModified={Date.now().toString()}
        datePublished={Date.now().toString()}
        image={""}
        key={""}
         />
         <h1>
             Hello from SEO
         </h1>
        </>

     );
}
 
export default DummyPage;