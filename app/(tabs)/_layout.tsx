import { Tabs } from "expo-router";

import CustomHeader from "@/components/CustomHeader";
import { Platform } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const TabsStack = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: Platform.OS === "web" ? "none" : "flex",
          backgroundColor: Colors.light.background,
          tabBarActiveTintColor: "#f22"
        },
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: Colors.light.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          header: Platform.OS === "web" ? CustomHeader : undefined,
          title: "✌️ Yo",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="work-history"
        options={{
          headerShown: false,
          title: "🛠️ Work",
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialIcons size={28} name="work-history" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          header: Platform.OS === "web" ? CustomHeader : undefined,
          title: "👋",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome5 name="info-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsStack;
