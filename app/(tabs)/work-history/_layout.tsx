import { Stack } from "expo-router";

import CustomHeader from "@/components/CustomHeader";
import { Platform } from "react-native";
import Colors from "@/constants/Colors";

const WorkHistoryStack = () => {
  return (
    <Stack
      screenOptions={{
        header: Platform.OS === "web" ? CustomHeader : undefined,
        headerStyle: { backgroundColor: Colors.light.background },
      }}
    >
      <Stack.Screen options={{ title: "🛠️ Work" }} name="index" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default WorkHistoryStack;
