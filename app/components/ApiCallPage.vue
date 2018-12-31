<template>
  <Page class="page">
    <ActionBar title="NS-v Code samples" />
    <ScrollView>
      <StackLayout class="home-panel" v-if="!loading">
        <Label
          textWrap="true"
          :text="msg"
          class="h2 description-label"
        />
        <Label
          textWrap="true"
          :text="cardname"
          class="h2 description-label"
        />
        <Label
          textWrap="true"
          :text="cardtext"
          class="h2 description-label"
        />
        <Image src="~/assets/images/bolty.jpg" class="img-sc"  />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
//const http = require("tns-core-modules/http");
import axios from "axios";
//import bolty from "../assets/images/bolty.jpg"

export default {
  mounted() {
    console.log("hi");
    this.getCard();
  },
  data() {
    return {
      msg: "This is the APICallPage",
      card: {},
      loading: true
    };
  },
  computed:{
    cardname(){
      return `Card name: ${this.card.name}`
    },
    cardtext(){
      return `Card text: ${this.card.text}`
    },
  },
  methods: {
    getCard() {
      console.log("running call")
      axios.get('https://api.magicthegathering.io/v1/cards?id=3bd579701c9c64f466f916520c51bb3435c13cdf')
        .then(res => {
          console.log(res.data);
          this.card = res.data.cards[0];
           
        })
        .then(() => (this.loading = false));
    }
  }
};
</script>

<style scoped>
.description-label {
  margin-bottom: 15;
}
.img-sc {
  width:700px;
}
</style>
