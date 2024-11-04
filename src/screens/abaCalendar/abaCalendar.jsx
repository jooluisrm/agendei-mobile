import { FlatList, View } from "react-native";
import { styles } from "./abaCalendar.style";
import { appointments } from "../../constants/data";
import Appointments from "../../components/appointments/appointments";

function AbaCalendar() {
    return <View style={styles.container}>


        <FlatList
            data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointments
                    service={item.service}
                    doctor={item.doctor}
                    specialty={item.specialty}
                />
            }}
        />
    </View>
}

export default AbaCalendar;