import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RootStack from '../navigation/RootStack';
import { crearTabla, obtenerProductos } from '../database/sqliteService';
import { setCart } from '../redux/slices/cartSlice';


const SQLiteInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      await crearTabla();
      const items = await obtenerProductos();
      dispatch(setCart(items));
    };

    init();
  }, []);

  return <RootStack />

};

export default SQLiteInit;