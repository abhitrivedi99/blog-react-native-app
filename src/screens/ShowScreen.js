import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context)

	const blogpost = state.find((blog) => blog.id === navigation.getParam('id'))

	return (
		<View>
			<Text key={blogpost.id} style={styles.title}>
				{blogpost.title}
			</Text>
			<Text style={styles.content}>{blogpost.content}</Text>
		</View>
	)
}

export default ShowScreen

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
				<EvilIcons name="pencil" size={35} />
			</TouchableOpacity>
		),
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
	},
	content: {
		fontSize: 16,
	},
})
