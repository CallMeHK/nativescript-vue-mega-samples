<template>
  <Page>
    <ActionBar title="NS-v Code samples" class="action-bar"/>
    <ScrollView orientation="vertical">
      <StackLayout
        class="padded-sc"
        orientation="vertical"
      >
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Scrolling List + For loop Example"
          @tap="showPage(pages.SP)"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="API Call with axios Example"
          @tap="showPage(pages.ACP)"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Simple Form Example"
          @tap="showPage(pages.SFP)"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Webview Example"
          @tap="showPage(pages.WP)"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Detecting Connectivity Example"
          @tap="showPage(pages.DOP)"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Vuex Store Example"
          @tap="showPage(pages.VDP)"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Key Value Store Example"
          @tap="showPage(pages.KVP)"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import KeyValuePage from "./KeyValuePage.vue";
import ApiCallPage from "./ApiCallPage.vue";
import ScrollPage from "./ScrollPage.vue";
import SimpleFormPage from "./SimpleFormPage.vue";
import VuexDemoPage from "./VuexDemoPage.vue";
import WebviewPage from "./WebviewPage.vue";
import DetectOnlinePage from "./DetectOnlinePage.vue";

export default {
  data() {
    return {
      msg: "Hello World!",
      pages: {
        KVP: KeyValuePage,
        ACP: ApiCallPage,
        SP: ScrollPage,
        SFP: SimpleFormPage,
        VDP: VuexDemoPage,
        WP: WebviewPage,
        DOP: DetectOnlinePage
      }
    };
  },
  methods: {
    onButtonTap(args) {
      console.log("button tapped");
    },
    showPage(args) {
      this.$navigateTo(args, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    }
  }
};
</script>

<style scoped>

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.padded-sc {
  padding: 50px;
}

.btn {
    height:100px;
}
</style>
