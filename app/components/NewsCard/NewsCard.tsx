import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './NewsCard.style';

export type NewsProps = {
    news: {
        u_id: number;
        author: string;
        title: string;
        description: string;
        imageUrl: string;
    }
}

const NewsCard = ({ news }: NewsProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} src={news.imageUrl} />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>

        </View>

    )
};

export default NewsCard;