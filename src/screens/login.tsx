import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		padding: 24,
	},

	alertaErro: {
		backgroundColor: '#f99',
		padding: 24,
		marginBottom: 16,
		borderRadius: 8,
	},

	alertaSucesso: {
		backgroundColor: '#9c9',
		padding: 24,
		marginBottom: 16,
		borderRadius: 8,
	},

	button: {
		backgroundColor: '#000',
		alignSelf: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
	},

	buttonText: {
		color: '#fff',
		fontSize: 18,
		textTransform: 'uppercase',
	},
});

const LoginScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.alertaErro}>
				<Text>ERRO: Login inválido.</Text>
			</View>
			<View style={styles.alertaSucesso}>
				<Text>SUCESSO: Bem-vindo.</Text>
			</View>
			<TextInput placeholder='Nome de usuário' />
			<TextInput placeholder='Senha' />
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;