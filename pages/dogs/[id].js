import React from 'react';

export const getStaticPaths = async () => {
    const res = await fetch('https://api.thedogapi.com/v1/breeds?api_key=api_key=0b0b0e18-213c-42c5-8f1f-fbeb5e09efe5&limit=10');
    const data = await res.json();
    const paths = data.map(dog => {
        return {
            params: {id: dog.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://api.thedogapi.com/v1/breeds/${id}?api_key=api_key=0b0b0e18-213c-42c5-8f1f-fbeb5e09efe5&limit=10`);
    const data = await res.json();
    return {
        props: {dog: data}
    }
}

const Details = ({dog}) => {
    return (
        <div>
            <h1>{dog.name}</h1>
        </div>
    );
};

export default Details;