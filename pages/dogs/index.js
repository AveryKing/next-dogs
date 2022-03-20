import React from 'react';

export const getStaticProps = async () => {
    const res = await fetch('https://api.thedogapi.com/v1/breeds?api_key=api_key=0b0b0e18-213c-42c5-8f1f-fbeb5e09efe5&limit=10');
    const data = await res.json();
    return {
        props: {dogs: data}
    }
}
const index = ({dogs}) => {
    return (
        <div>
            <h1>All Dogs</h1>
        </div>
    );
};

export default index;