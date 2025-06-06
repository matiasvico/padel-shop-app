import { Text, View, StyleSheet, Modal, Pressable} from 'react-native';


export default function ProductModal({ visible, onClose, product }) {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={style.modalOverlay}>
                <View style={style.modalContent}>
                    <Text style={style.modalTitle}>marca {product?.title}</Text>
                    <Text style={style.modalText}>Modelo {product?.name}</Text>
                    <Text style={style.modalText}>Precio ${product?.price}</Text>
                    <Pressable
                        style={style.modalBtn}
                        onPress={onClose}
                    >
                        <Text style={style.modalBtnText}>x</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    modalContent: {
        backgroundColor: "white",
        padding: 25,
        borderRadius: 12,
        width: "100%",
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 14,
        fontWeight:"900",
        marginBottom: 10,
        textAlign: "center",
        textTransform:"uppercase"
    },
    modalText: {
        fontSize: 16,
    },
    modalBtn:{
        backgroundColor:"#ff4242",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop:20,
        textAlign:"center"
    },
    modalBtnText:{
        color:"#fff"
    },
    modalImg:{
        width:10,
        height:10
    }
})
