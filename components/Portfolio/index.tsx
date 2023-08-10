import React, { useState, useEffect } from "react";
import { Grid, Text } from "@nextui-org/react";
import ViniloCard from "./ViniloCard";
import Link from "next/link";

type WishlistItem = {
  title: string;
  url: string;
};

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("./collection.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
    fetch("./wishlist.json")
      .then((response) => response.json())
      .then((jsonData) => setWishlist(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Grid.Container gap={2} justify="center" css={{ padding: "1rem 4rem" }}>
      <Grid xs={12}>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          My collection
        </Text>
      </Grid>
      {data.map((item, index) => (
        <Grid sm={6} xs={12}>
          <ViniloCard key={index} item={item} />
        </Grid>
      ))}
      <Grid xs={12}>
        <Text
          h1
          size={20}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Whishlist
        </Text>
      </Grid>
      {wishlist.map((item: WishlistItem, index) => (
        <Grid xs={12}>
          <Link href={item.url}>{item.title}</Link>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Portfolio;
