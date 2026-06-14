import  { useState } from 'react';
import Heading1 from './text/Heading1';
import TextParagraph from './text/TextParagraph';
import BoldHeading from './text/BoldHeading';
import TwoColumns from './TwoColumns';
import TheGoodEdgeIntern from './experiences/TheGoodEdgeIntern';
import KaizenCollegeNewsletterSeniorReporter from './experiences/KiazenCollegeNewsletterSeniorReporter';
import ThePRactice from './experiences/ThePRactice';
import MediagraphicsPR from './experiences/MediagraphicsPR';

const HomeContent = () => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className="lg-max-w">
            <br></br>
            <div className="relative overflow-hidden">
                {loading && <div className="absolute inset-0 flex items-center justify-center">Loading...</div>}
                <img 
                    src='https://res.cloudinary.com/dp05xipet/image/upload/v1744733018/PXL_20241226_090814840_2_rdfdid.jpg'
                    alt="Descriptive Alt Text" 
                    className={`h-[48vh] lg:h-[60vh] w-full object-contain object-top ${loading ? 'opacity-0' : 'opacity-100'}`} 
                    onLoad={handleImageLoad} 
                />
            </div>
            <Heading1 text='A quick learner and team player with great communication skills, always aiming to deliver efficient and high quality results.' />
            <TextParagraph text={"I’ve graduated from Bengaluru City University with a strong foundation in writing, editing, public relations, advertising, and various digital media and software."} />
            <TextParagraph text={"Committed to bringing a fresh and multifaceted perspective to the table."} />
            <TextParagraph text={"In my free time, you can find me either strumming on my electric guitar, exploring niche interests online (like mechanical keyboards or Japanese model kits!), writing poems, or exploring new cuisines and exciting restaurants :)"} />
            <br></br>
            <br></br>
            <br></br>
            <BoldHeading text='Work Experience' />
            <TwoColumns leftContent={MediagraphicsPR} rightContent={ThePRactice} />
            <TwoColumns leftContent={TheGoodEdgeIntern} rightContent={KaizenCollegeNewsletterSeniorReporter} />
        </div>
    );
};

export default HomeContent;