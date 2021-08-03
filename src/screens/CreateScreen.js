import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
	const { addBlogsPost } = useContext(Context)

	return (
		<View>
			<BlogPostForm
				onSubmit={(title, content) =>
					addBlogsPost(title, content, () => {
						navigation.navigate('Index')
					})
				}
				titles={{ title: 'Add Title', content: 'Add Content' }}
			/>
		</View>
	)
}

export default CreateScreen

const styles = StyleSheet.create({})
