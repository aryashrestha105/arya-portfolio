import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../Constants';
import { useEffect } from 'react';
import GenericArticle from './GenericArticle';

const Article = () => {
    const { articleId } = useParams();
    let decodedArticleId = decodeURIComponent(articleId); // Decode the articleId

    useEffect(() => {
        console.log("Decoded articleId:", decodedArticleId); // Log the decoded articleId
        window.scrollTo(0, 0);
    }, [decodedArticleId]);

    return (
        <div className='lg-max-w'>
            <br></br>
            <Link to={`${BASE_URL}/works`}>
                <div className="ml-5 font-piazzolla text-green-600 text-base font-bold text underline">Back to Index</div>
            </Link>
            <GenericArticle articleId={decodedArticleId} />
        </div>
    );
};

export default Article;