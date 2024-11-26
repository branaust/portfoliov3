import PlaySpotPrivacyPolicy from "@/components/PlaySpotPrivacyPolicy";
import { ScrollView } from "react-native";

export default function App() {
  return (
    // This is a DOM component. It re-exports a wrapped `react-native-webview` behind the scenes.
    <ScrollView style={{ flex: 1 }}>
      <PlaySpotPrivacyPolicy />
    </ScrollView>
  );
}
