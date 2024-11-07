import { Alert, FlatList, View } from "react-native";
import { styles } from "./abaCalendar.style";
import Appointments from "../../components/appointments/appointments";
import { useEffect, useState } from "react";
import api from "../../constants/api";

function AbaCalendar() {

    const [appointments, setAppointments] = useState([]);

    async function LoadAppointments() {
        try {
            const response = await api.get(`/appointments`);

            if (response.data) {
                setAppointments(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);
            } else {
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
            }

        }
    }

    async function DeleteAppointment(id_appointment) {
        try {
            const response = await api.delete(`/appointments/${id_appointment}`);

            if (response.data?.id_appointment) {
                LoadAppointments();
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);
            } else {
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
            }

        }
    }

    useEffect(() => {
        LoadAppointments();
    }, []);

    return <View style={styles.container}>


        <FlatList
            data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointments
                    id_appointment={item.id_appointment}
                    service={item.service}
                    doctor={item.doctor}
                    specialty={item.specialty}
                    onPress={DeleteAppointment}
                />
            }}
        />
    </View>
}

export default AbaCalendar;