import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.header}>🍱 Welcome to Nomu</Title>

      <Card style={styles.card}>
        <Card.Content>
          <Title>📆 Meal Planning</Title>
          <Paragraph>Plan your meals for the week effortlessly.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate("MealPlanning")}>
            Open
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>🛒 Grocery List</Title>
          <Paragraph>Easily manage your grocery shopping.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate("GroceryList")}>
            Open
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 24,
  },
  card: {
    marginBottom: 16,
  },
});
