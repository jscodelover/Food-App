import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/Screens/Search';
import DetailScreen from './src/Screens/Detail';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Search"
				screenOptions={{
					// for gesture in android
					gestureEnabled: true,
					headerStyle: {
						// styling header
						backgroundColor: '#101010'
					},
					headerTitleStyle: {
						fontWeight: 'bold'
					},
					headerTintColor: '#ffd700',
					headerBackTitleVisible: false // remove previous screen name with back button in the ios
				}}
				headerMode="float" // float header just like in ios in andriod
			>
				<Stack.Screen
					name="Search"
					component={SearchScreen}
					options={{ title: 'Search Screen' }}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					options={{ title: 'Detail Screen' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
