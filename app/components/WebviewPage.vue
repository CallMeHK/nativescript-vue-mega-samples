<template>
  <Page class="page">
    <ActionBar title="NS-v Code samples" />
    <ScrollView>
      <StackLayout class="home-panel">
        <Label
          textWrap="true"
          :text="msg"
          class="h2 description-label"
        />
        <WebView src="<div style='border-style: double;text-align:center;margin:8px;'><h2>This is like some random static HTML, below google is embedded into the page</h2></div>" />
        <WebView src="https://www.google.com/" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "This is the WebviewPage.  You can bring in pages or render static html with this stuff."
    };
  }
};
</script>

<style scoped>

.description-label {
  margin-bottom: 15;
}
</style>
