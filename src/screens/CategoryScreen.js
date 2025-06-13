import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useGetProductosQuery } from '../services/shopServices';
import { addToCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import { guardarProducto } from "../database/sqliteService";
import { useState } from 'react';


const CategoryScreen = () => {


    const { data: productos } = useGetProductosQuery();
    const dispatch = useDispatch();

    const handleAddToCart = async (product) => {
        dispatch(addToCart(product));
        await guardarProducto(product)
        alert("Producto añadido al carrito");
    };


    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const productosFiltrados = categoriaSeleccionada
        ? productos?.filter(p => p.category === categoriaSeleccionada)
        : productos;

    const CategoriaCheckbox = ({ label, value }) => (
        <TouchableOpacity
            style={style.checkboxContainer}
            onPress={() => setCategoriaSeleccionada(value)}
        >
            <View style={style.checkbox}>
                {categoriaSeleccionada === value && <View style={style.checked} />}
            </View>
            <Text style={style.label}>{label}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={style.container}>
            <Text style={style.title}>Productos Disponibles</Text>
            <View style={style.filtros}>
                <CategoriaCheckbox label="Todos" value={null} />
                <CategoriaCheckbox label="Nuevos" value="nuevos" />
                <CategoriaCheckbox label="Ofertas" value="oferta" />
            </View>
            <FlatList
                data={productosFiltrados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Image source={{ uri: item.image }} style={style.itemImg} />

                        <View style={style.itemContent}>
                            <Text style={style.itemName}>{item.name}</Text>
                            <Text style={style.itemTitle}>{item.title}</Text>
                            <Text style={style.itemPrice}>${item.price}</Text>
                            <TouchableOpacity
                                style={style.btn}
                                onPress={() => handleAddToCart(item)}
                            >
                                <Text style={style.btnText}>
                                    Comprar
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                )}
            />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: "#202024"
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#eee",
        color: "#eee",
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 30,
    },
    itemContent: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center"
    },
    itemPrice: {
        fontSize: 16,
        color: "#eee",
        marginBottom: 2
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#eee",
    },
    itemTitle: {
        fontSize: 14,
        color: '#444',
        textTransform: 'capitalize',
        marginBottom: 5,
        color: "#eee",
    },
    itemImg: {
        width: 100,
        height: 130,
        borderRadius: 10,
        marginRight: 15
    },
    btn: {
        backgroundColor: "#0d6efd",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10

    },
    btnText: {
        color: "#eee",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        elevation: 7
    },
    filtros: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-around',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#666',
        borderRadius: 4,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: '#198754',
        borderRadius: 2,
    },
    label: {
        fontSize: 16,
        color: '#eee',
    },
})

export default CategoryScreen