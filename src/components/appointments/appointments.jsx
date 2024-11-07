import { Image, Text, View } from "react-native";
import { styles } from "./appointments.style";
import icon from "../../constants/icon"
import Button from "../button/button";

function Appointments(props) {
    return <View style={styles.appointment}>
        <Text style={styles.name}>
            {props.service} - {props.doctor}
        </Text>
        <Text style={styles.specialty}>{props.specialty}</Text>
        <View style={styles.container}>

            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendario} />
                    <Text style={styles.bookingDate}>15/10/24</Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock} />
                    <Text style={styles.bookingHour}>08:30h</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                <Button
                    text="Cancelar Reserva"
                    theme="danger"
                    onPress={() => props.onPress(props.id_appointment)}
                />
            </View>

        </View>
    </View>
}

export default Appointments;