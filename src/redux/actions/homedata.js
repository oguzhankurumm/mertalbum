import { GET_HOMEDATA_START, GET_HOMEDATA_SUCCESS, GET_HOMEDATA_FAILED } from '../constants';
import { firestore } from '../../config/config';

export const getHomeData = () => async dispatch => {
    dispatch({ type: GET_HOMEDATA_START });
    try {
        const getProducts = await firestore().collection('products').get();
        const getSliders = await firestore().collection('sliders').get();
        const getCampaigns = await firestore().collection('campaigns').get();

        const products = getProducts.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        });
        const sliders = getSliders.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        });
        const campaigns = getCampaigns.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        });

        dispatch({ type: GET_HOMEDATA_SUCCESS, products, sliders, campaigns })
    } catch (error) {
        dispatch({ type: GET_HOMEDATA_FAILED, error: error.message })
    }
}