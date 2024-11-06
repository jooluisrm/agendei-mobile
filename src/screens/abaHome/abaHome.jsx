import { FlatList, Text, View } from "react-native";
import { styles } from "./abaHome.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";
import icon from "../../constants/icon";

function AbaHome(props) {

    function ClickDoctor(id_doctor, name, specialty, icon) {
        props.navigation.navigate("services", {
            id_doctor, 
            name, 
            specialty, 
            icon
        });
        console.log(icon)
    }

    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviçõs médicos</Text>

        <FlatList
            data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Doctor
                    id_doctor={item.id_doctor}
                    name={item.name}
                    icon={item.icon}
                    specialty={item.specialty}
                    onPress={ClickDoctor}
                />
            }}
        />
    </View>
}

export default AbaHome;