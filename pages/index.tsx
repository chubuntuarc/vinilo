import { useState } from "react";
import { Grid, Text } from "@nextui-org/react";
import Portfolio from "../components/Portfolio";

const Home = () => {
  const [hiddenText, setHiddenText] = useState(true);
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} alignItems="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            padding: "1rem 3rem",
          }}
          weight="bold"
        >
          Vinilo
        </Text>
      </Grid>
      <Grid xs={12} css={{ padding: "1rem 4rem" }}>
        <Text size={20} weight="bold">
          LP's collection managment app.
        </Text>
      </Grid>
      <Grid xs={12}>
        <Portfolio />
      </Grid>
    </Grid.Container>
  );
};

export default Home;
