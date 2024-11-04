import { FlatList, Text, View } from "react-native";
import { styles } from "./abaHome.style";
import { doctors } from "../../constants/data";

function AbaHome() {
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviçõs médicos</Text>

        <FlatList
            data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }} 
        />
    </View>
}

export default AbaHome;