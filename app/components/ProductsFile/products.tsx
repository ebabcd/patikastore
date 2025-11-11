import React, { PureComponent } from "react";
import styles from './products_style';
import { View, Text, Image } from "react-native"

type ProductsProps ={ // burada ürünlerin özellikleri kaydedildi.
    product:{
        id: number,
        title: string,
        imgURL: string,
        price: string,
        inStock: boolean,
    }

}


const Products = ({product}: ProductsProps) =>{
    return(
        
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={{uri:product.imgURL}}/>
            <View style={styles.body}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>{product.price}</Text>
              <Text style={product.inStock ? styles.stock : styles.outOfStock}>
               {product.inStock ? 'Stokta var' : 'Stokta yok'}
                </Text>
            </View>
        </View>

    );
};

export default Products;