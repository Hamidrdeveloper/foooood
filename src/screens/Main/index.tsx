import React, { useEffect, useMemo, useRef } from 'react';
import {
  StyleSheet, View, Image, Platform, Dimensions,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, IProductCardProps } from '~/@types';
import FlatListH from '~/components/FlatList';
import {
  setContentProductModal,
  setCategories,
  setProducts,
} from '~/store/actions/Product';
import Firebase from '~/services';
import { setSession } from '~/store/actions/Authentication';

export default function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      setInterval(() => {
        Firebase.getSession().then(async (userInformation: any) => {
          if (userInformation) {
            try {
              const orders = await Firebase.getOrders(userInformation.uid);
              const categories = await Firebase.getCategories();
              const products = await Firebase.getProducts();

              dispatch(setSession({ ...userInformation, orders }));
              dispatch(setCategories(categories));
              dispatch(setProducts(products));
            } catch (error) {
              // DISPLAY TOAST
            }
          } else {
          }
        });
      }, 2000);
    })();
  }, []);

  const {
    categories,
    typeOfCategory,
    products,
    productModal: { isVisibled },
  } = useSelector((state: any) => state.Product);

  const productsFiltered = useMemo(() => {
    return products.filter((product: IProduct) => product.category);
  }, [typeOfCategory]);
  const handleOpenProductModal = (data: IProductCardProps) => {
    const {
      name, description, price, image, id,
    } = data;
    dispatch(
      setContentProductModal({
        name,
        description,
        price,
        image,
        id,
      }),
    );
  };
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 3,
          longitudeDelta: 4,
        }}
        style={styles.map}
        showsUserLocation
        zoomEnabled={false}
        scrollEnabled={false}
        rotateEnabled={false}
      >
        {productsFiltered.map((data) => {
          return (
            <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title={data.name}
              description={data.description}
              onPress={() => {
                handleOpenProductModal(data);
              }}
            />
          );
        })}
      </MapView>
      <FlatListH data={productsFiltered} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
