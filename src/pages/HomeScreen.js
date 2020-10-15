import React from 'react';
import CreatePost from '../components/CreatePost';
import useQueryFetch from '../hooks/useQueryFetch';
import { getAllPosts } from '../graphql/Queries';
import Posts from '../components/Posts';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
    const { data, errors } = useQueryFetch(getAllPosts());
    const history = useHistory();

    if (!data) {
        return <div> Data Loading...</div>;
    }
    if (errors) {
        return <div> Error in Fetching Data </div>;
    }
    return (
        <div style={styles.container}>
            <h3> Great Posts from Great Authors</h3>

            <div style={styles.postsDiv}>
                {data.posts.map((record) => (
                    <div
                        style={styles.cardDiv}
                        onClick={() =>
                            history.push({
                                pathname: `/posts/${record.slug}`,
                                state: { record },
                            })
                        }
                    >
                        <Posts key={record.slug} postobj={record} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    postsDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingBottom: 10,
        overflow: 'auto',
    },
    cardDiv: {
        flex: 0.33,
    },
};
export default HomeScreen;
