import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import { useRoute } from '@react-navigation/native';
import ProductModels from '../../components/common/product-models';
import ProductDetailsSlider from '../../components/common/product-details-slider';

const ProductDetails = () => {
    const routes = useRoute();
    const { product } = routes.params;
    const Images = product?.images !== undefined ? [...product.images, product.image] : [product.image];

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            <ProductDetailsSlider sliders={Images} />
            <View style={styles.subContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <View style={{ width: '100%' }}>
                    <Text style={styles.description}>{product.description !== undefined && product.description !== "" ? String(product.description).replaceAll("\\n", "\n") : 'Ürün açıklaması girilmemiş.'}</Text>
                </View>
                {product?.models !== undefined &&
                    <>
                        <View style={styles.modelsTitleContainer}>
                            <Text style={styles.headerTitle}>Modellerimiz</Text>
                        </View>
                        <View style={styles.modelsContainer}>
                            {product.models.map((item, index) => {
                                return <ProductModels key={index} item={item} />
                            })}
                        </View>
                    </>
                }
            </View>
        </ScrollView>
    )
}

export default ProductDetails;