import { Text, View } from 'react-native'

export default function App(props) {
  return (
    <>         
    <h1 className="text-3xl font-bold underline">
      HTML H1 element (classes should work)
    </h1>
    <View className="h-full flex justify-center items-center">
      <Text accessibilityRole="header">
        React Native (web) Text Element (classes shouldn`t work)
      </Text>
    </View>
    </>
  )
}