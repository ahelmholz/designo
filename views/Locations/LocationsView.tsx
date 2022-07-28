import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import MaxWidth from "../../components/MaxWidth";

import Map from "./components/Map";
import LocationDetails from "./components/LocationDetails";

const LocationsView = () => {
  return (
    <MaxWidth px={{ md: "24px" }}>
      <Flex
        flexDir="column"
        columnGap={{ lg: "30px" }}
        rowGap={{ base: "32px", md: "120px" }}
      >
        <Grid
          gridTemplateAreas={{
            base: `
            "map"
            "info"
            `,
            lg: `"info info map"`,
          }}
          columnGap={{ lg: "30px" }}
          rowGap={{ md: "32px" }}
          id="canada"
        >
          <GridItem area="info">
            <LocationDetails
              phone="+1 253-863-8967"
              email="contact@designo.co"
              officeName="Designo Central Office"
              locationName="Canada"
              address={{
                lineOne: "3886 Wellington Street",
                lineTwo: "Toronto, Ontario M9C 3J5",
              }}
            />
          </GridItem>
          <GridItem area="map">
            <Map
              mapUrl={{
                base: "/map_canada_base.png",
                md: "/map_canada_md.png",
                lg: "/map_canada_lg.png",
              }}
            />
          </GridItem>
        </Grid>
        <Grid
          gridTemplateAreas={{
            base: `
            "map"
            "info"
            `,
            lg: `"map info info"`,
          }}
          columnGap={{ lg: "30px" }}
          rowGap={{ md: "32px" }}
          id="australia"
        >
          <GridItem area="info">
            <LocationDetails
              phone="(02) 6720 9092"
              email="contact@designo.au"
              officeName="Designo AU Office"
              locationName="Australia"
              address={{
                lineOne: "19 Balonne Street",
                lineTwo: "New South Wales 2443",
              }}
            />
          </GridItem>
          <GridItem area="map">
            <Map
              mapUrl={{
                base: "/map_australia_base.png",
                md: "/map_australia_md.png",
                lg: "/map_australia_lg.png",
              }}
            />
          </GridItem>
        </Grid>
        <Grid
          gridTemplateAreas={{
            base: `
            "map"
            "info"
            `,
            lg: `"info info map"`,
          }}
          columnGap={{ lg: "30px" }}
          rowGap={{ md: "32px" }}
          id="uk"
        >
          <GridItem area="info">
            <LocationDetails
              phone="078 3115 1400"
              email="contact@designo.uk"
              officeName="Designo UK Office"
              locationName="United Kingdom"
              address={{
                lineOne: "13  Colorado Way",
                lineTwo: "Rhyd-y-fro SA8 9GA",
              }}
            />
          </GridItem>
          <GridItem area="map">
            <Map
              mapUrl={{
                base: "/map_united_kingdom_base.png",
                md: "/map_united_kingdom_md.png",
                lg: "/map_united_kingdom_lg.png",
              }}
            />
          </GridItem>
        </Grid>
      </Flex>
    </MaxWidth>
  );
};

export default LocationsView;
