<template>
  <Page class="page">
    <ActionBar title="NS-v Code samples" />
    <ScrollView>
      <ListView
        for="item in items"
        class="list-group"
        @itemTap="onItemTap"
      >
        <v-template>
          <StackLayout class="list-group-item">
            <Label class="h2" :text="item.heading" />
            <Label textWrap="true" :text="item.content" />
          </StackLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "This is the ScrollPage",
      items: [
        {
          heading: "Bulbasaur",
          content:
            "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."
        },
        {
          heading: "Ivysaur",
          content:
            "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon."
        },
        {
          heading: "Venusaur",
          content:
            "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people."
        },
        {
          heading: "Charmander",
          content:
            "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
        },
        {
          heading: "Charmeleon",
          content:
            "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
        },
        {
          heading: "Charizard",
          content:
            "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
        },
        {
          heading: "Squirtle",
          content:
            "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
        },
        {
          heading: "Wartortle",
          content:
            "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler."
        },
        {
          heading: "Blastoise",
          content:
            "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
        }
      ]
    };
  }
};
</script>

<style scoped>
.description-label {
  margin-bottom: 15;
}
</style>
