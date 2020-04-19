import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Check } from "./screens";
import useLinking from "./navigation/useLinking";
import { AppContextProvider } from "~/context/Context";

const { Navigator, Screen } = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          "oxygen-bold": require("~/assets/fonts/Larsseit.ttf"),
          "oxygen-light": require("~/assets/fonts/Circular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <AppContextProvider>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <Navigator
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
              }}
            >
              <Screen name="Home" component={Home} />
              <Screen name="Check" component={Check} />
            </Navigator>
          </NavigationContainer>
        </View>
      </AppContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
