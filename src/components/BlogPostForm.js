import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, data, titles }) => {
	const [title, setTitle] = useState(data.title)
	const [content, setContent] = useState(data.content)

	return (
		<View>
			<Text style={styles.labelStyle}>{titles.title}:</Text>
			<TextInput style={styles.inputStyle} value={title} onChangeText={(text) => setTitle(text)} />
			<Text style={styles.labelStyle}>{titles.content}:</Text>
			<TextInput style={styles.inputStyle} value={content} onChangeText={(text) => setContent(text)} />
			<Button title="Save Blogpost" onPress={() => onSubmit(title, content)} />
		</View>
	)
}

BlogPostForm.defaultProps = {
	data: {
		title: '',
		content: '',
	},
}

export default BlogPostForm

const styles = StyleSheet.create({
	inputStyle: {
		borderWidth: 1,
		fontSize: 18,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	labelStyle: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
})
