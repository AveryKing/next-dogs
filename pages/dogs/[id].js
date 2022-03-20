import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Details.module.css';
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
    const imgRes = await fetch(`https://api.thedogapi.com/v1/images/${data.reference_image_id}?api_key=api_key=0b0b0e18-213c-42c5-8f1f-fbeb5e09efe5`);
    const imgData = await imgRes.json();
    const imageUrl = imgData.url;
    return {
        props: {dog: data, imageUrl}
    }
}

const Details = ({dog, imageUrl}) => {
    return (
        <>
        <h1 className={styles.title}>{dog.name}</h1>
        <div className={styles.info}>
            <div className={styles.stats}>
                <p>Weight: {dog.weight.imperial} lbs</p>
                <p>Height: {dog.height.imperial} in</p>
                <p>Bred for: {dog.bred_for}</p>
                <p>Life Span: {dog.life_span}</p>
                <p>Traits: {dog.temperament}</p>
            </div>

            <div className={styles.image}>
                <Image className={styles.imageElement} src={imageUrl} width={340} height={250} />
            </div>
        </div>
        </>
    );
};

export default Details;