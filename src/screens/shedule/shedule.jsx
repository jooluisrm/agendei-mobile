import { Text, View } from "react-native";
import { styles } from "./shedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";

//LocaleConfig.locates["pt-BR"] = ptBR;
//LocaleConfig.defaultLocale = "pt-BR";

function Schedule() {

    const [selectedDate, setSelectDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectedHour, setSelectHour] = useState("");

    return <View style={styles.container}>
        <View>
            <Calendar
                theme={styles.theme}
                onDayPress={(day) => {
                    setSelectDate(day.dateString)
                }}
                markedDates={{
                    [selectedDate]: { selected: true }
                }}
                minDate={new Date().toDateString()}
            />

            <View>
                <Text style={styles.textHour}>Horário</Text>
                <View>
                    <Picker
                        selectedValue={selectedHour}
                        onValueChange={(ItemValue, itemIndex) => {
                            setSelectHour(ItemValue);
                        }}
                    >
                        <Picker.Item label="09:00" value="09:00" />
                        <Picker.Item label="09:30" value="09:30" />
                        <Picker.Item label="10:00" value="10:00" />
                    </Picker>
                </View>
            </View>

        </View>
        
        <View>
            <Button text="Confirmar Reserva" />
        </View>
    </View>
}

export default Schedule;