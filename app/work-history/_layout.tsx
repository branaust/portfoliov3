import { Stack } from "expo-router";

import CustomHeader from "@/components/CustomHeader";

const WorkHistoryStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: CustomHeader }} />
      <Stack.Screen name="[id]" options={{ header: CustomHeader }} />
    </Stack>
  );
};

export default WorkHistoryStack;
