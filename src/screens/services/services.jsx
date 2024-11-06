import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.styles";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/services/service";

function Services(props) {

    function ClickService(id_service) {
        props.navigation.navigate("schedule");
    }

    return <View style={styles.container}>

        <View style={styles.banner}>
            <Image source={icon.female} />
            <Text style={styles.name}>Heber</Text>
            <Text style={styles.specialty}>Cardiologista</Text>
        </View>



        <FlatList
            data={doctors_services}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Service
                    id_service={item.id_service}
                    description={item.description}
                    price={item.price}
                    onPress={ClickService}
                />
            }}
        />
    </View>
}

export default Services;