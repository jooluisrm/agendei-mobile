import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from '../../constants/icon';
import { styles } from "./login.style";
import Button from "../../components/button/button";
import { useState } from "react";
import api from "../../constants/api.js";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function ExecuteLogin() {
        try {
            const response = await api.post("/users/login", {
                email,
                password
            });

            if (response.data) {
                console.log(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);
            } else {
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
            }

        }
    }

    return <>
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View >
                <View style={styles.containerInput}>
                    <TextInput
                        placeholder="E-mail"
                        style={styles.input}
                        onChangeText={(texto) => setEmail(texto)}
                    />
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(texto) => setPassword(texto)}
                    />
                </View>

                <Button text="Acessar" onPress={ExecuteLogin} />
            </View>

            <View style={styles.footer}>
                <Text>Não tenho conta. </Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Criar conta agora.</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}

export default Login;