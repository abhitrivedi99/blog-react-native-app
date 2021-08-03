import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogsPost, getBlogPosts } = useContext(Context)

	useEffect(() => {
		getBlogPosts()

		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts()
		})

		return () => {
			listener.remove()
		}
	}, [])

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(post) => post.id}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<TouchableOpacity onPress={() => deleteBlogsPost(item.id)}>
								<Feather style={styles.icon} name="trash" />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

export default IndexScreen

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather style={styles.plusIcon} name="plus" />
			</TouchableOpacity>
		),
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 7,
		paddingHorizontal: 10,
		borderColor: 'grey',
		borderBottomWidth: 1,
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},
	plusIcon: {
		marginRight: 15,
		fontSize: 30,
	},
})
