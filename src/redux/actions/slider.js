import { GET_SLIDER_START, GET_SLIDER_SUCCESS, GET_SLIDER_FAIL } from '../contants';

export function getSliders() {
    return async function (dispatch) {
        dispatch({ type: GET_SLIDER_START })
        return dispatch({
            type: GET_SLIDER_SUCCESS,
            sliders: [{
                id: 0,
                title: "Slider 1",
                image: "https://www.xdrive.com.tr/Data/EditorFiles/slider/mobil-tr/24saat-mobil.webp"
            },
            {
                id: 1,
                title: "Slider 2",
                image: "https://www.xdrive.com.tr/Data/EditorFiles/slider/mobil-tr/akdeniz-kumas-mobil.webp"
            },
            {
                id: 2,
                title: "Slider 3",
                image: "https://www.xdrive.com.tr/Data/EditorFiles/slider/masaustu-tr/xdrv1.webp"
            },
            {
                id: 3,
                title: "Slider 4",
                image: "https://www.xdrive.com.tr/Data/EditorFiles/slider/masaustu-tr/Full-kasim-indirimi-banner.webp"
            },
            {
                id: 4,
                title: "Slider 5",
                image: "https://www.xdrive.com.tr/Data/EditorFiles/slider/masaustu-tr/icindekisen-masaustu-tr.webp"
            }
            ]
        })
    }
}