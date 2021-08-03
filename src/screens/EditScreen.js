import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
	const { state, editBlogsPost } = useContext(Context)

	const blogpost = state.find((blog) => blog.id === navigation.getParam('id'))

	return (
		<View>
			<BlogPostForm
				data={blogpost}
				onSubmit={(title, content) =>
					editBlogsPost(navigation.getParam('id'), title, content, () => navigation.pop())
				}
				titles={{ title: 'Edit Title', content: 'Edit Content' }}
			/>
		</View>
	)
}

export default EditScreen

const styles = StyleSheet.create({})
