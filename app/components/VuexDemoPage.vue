<template>
  <Page class="page">
    <ActionBar title="NS-v Code samples" />
    <ScrollView>
      <StackLayout class="home-panel p-15">
        <Label
          textWrap="true"
          :text="msg"
          class="h2 description-label"
        />
        <Button
          @tap="increment"
          text="+1 to the vuex global state counter"
        />
        <Button
          @tap="decrement"
          text="-1 to the vuex global state counter"
        />
        <Label
          class="h2"
          :text="'vuex says the count is: ' + this.count"
        />
        <Label
          class="h2"
          textWrap="true"
          :text="text" 
        />
        <TextView
          v-model='newText'
          v-on:textChange="onChange"
        />
        
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "This is the VuexDemoPage.  Vuex is a way to add a global state across an app without a database for the session only.  Its useful for holding many thing, like json web tokens and ur mum.",
      newText: this.$store.state.text
    };
  },
  computed: {
    count() {
      console.log(this.$store.state.count);
      return this.$store.state.count;
    },
    text() {
      console.log(this.$store.state.text);
      return this.$store.state.text;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    onChange(e) {
      this.$store.commit("editText", this.newText);
    }
  }
};
</script>

<style scoped>
.description-label {
  margin-bottom: 15;
}
</style>
