import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { borrarProducto, limpiarCarritoDB } from '../database/sqliteService';
import ProductModal from "../components/ProductModal";



const CartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();


    const [selectProduct, setSelectProduct] = useState(null)
    const [modalVisible, setModalVisible] = useState(null)

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleRemoveItem = async (id) => {
        dispatch(removeFromCart(id));
        borrarProducto(id)
        alert("Producto eliminado")
    };

    const handleClearCart = async () => {
        dispatch(clearCart());
        await limpiarCarritoDB()
        alert("Carrito de compra vacio")
    };

    const handleCheckout = async () => {
        alert('¡Compra finalizada!');
        await limpiarCarritoDB()
        dispatch(clearCart());
    };

    const openProductModal = (item) => {
        setSelectProduct(item);
        setModalVisible(true)
    }



    return (
        <View style={style.container}>
            <Text style={style.title}>Carrito de Compras</Text>

            <FlatList
                data={cartItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={style.itemContent}>
                        <TouchableOpacity
                            onPress={() => openProductModal(item)}
                            style={style.card}
                        >
                            <Image source={{ uri: item.image }} style={style.itemImg} />
                            <View style={style.textInfo}>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Text style={style.itemPrice}>${item.price}</Text>
                            </View>
                            <TouchableOpacity
                                style={style.btnDeleteProduct}
                                onPress={() => handleRemoveItem(item.id)}
                            >
                                <Text style={style.itemDelete}>Eliminar</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                )} />

            <View style={style.buttonContainer}>
                <Text style={style.total}>Total ${total}</Text>
                <TouchableOpacity
                    style={style.btnDelete}
                    onPress={handleClearCart}
                >
                    <Text style={style.buttonText}>Vaciar productos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.btnBuy}
                    onPress={handleCheckout}
                >
                    <Text style={style.buttonText}>Finalizar compra</Text>
                </TouchableOpacity>
            </View>
            <ProductModal
                visible={modalVisible}
                product={selectProduct}
                onClose={() => setModalVisible(false)}
            />
        </View>

    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: "#202024"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#eee",
        color: "#eee"
    },
    itemContent: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: "#222"
    },
    card: {
        alignItems: "center",
        justifyContent:"center"
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#eee"
    },
    itemPrice: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
        color: "#eee"
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: "#eee"
    },
    buttonContainer: {
        marginTop: 20,
        gap: 10
    },
    btnDelete: {
        backgroundColor: '#ff4242',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
        alignSelf: 'center'
    },
    btnBuy: {
        backgroundColor: '#198754',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 7,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#eee',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    itemImg: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 15,
        objectFit: "contain",
    },
    btnDeleteProduct: {
        backgroundColor: '#ff4242',
        paddingVertical: 7,
        paddingHorizontal: 14,
        borderRadius: 20,
        elevation: 2,
        alignSelf: 'center',
        marginTop: 10
    },
    itemDelete: {
        color: "#eee"
    }
})

export default CartScreen