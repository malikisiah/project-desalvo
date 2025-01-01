import { Text, View } from "react-native";
import { trpc } from "@/trpc/react";

export default function Index() {
  const { data } = trpc.api.hello.useQuery({ text: "World" });
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Hello {data}</Text>
    </View>
  );
}
