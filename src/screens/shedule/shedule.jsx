import { View } from "react-native";
import { styles } from "./shedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";

//LocaleConfig.locates["pt-br"] = ptBR;
//LocaleConfig.defaultLocale = "pt-br";

function Schedule() {

    const [selected, setSelect] = useState("");

    return <View style={styles.container}>
        <Calendar
            theme={styles.theme}
            onDayPress={(day) => {
                setSelect(day.dateString)
            }}
            markedDates={{
                [selected]: {selected: true}
            }}
            minDate={new Date().toDateString()}
        />
    </View>
}

export default Schedule;