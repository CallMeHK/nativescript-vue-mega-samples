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
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Check Network"
          @tap="checkNetwork()"
        />
        <Label
          textWrap="true"
          :text="networkStatus"
          class="h2 description-label"
        />
        <Button
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Start Network Monitor"
          @tap="startNetworkMonitor()"
        />
        <Label
          textWrap="true"
          :text="currentNetworkStatus"
          class="h2 description-label"
        />
        <Button
          v-show="!monitorOff"
          class="btn btn-rounded-sm btn-primary"
          height="70"
          text="Stop Network Monitor"
          @tap="stopNetworkMonitor()"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const connectivityModule = require("tns-core-modules/connectivity");

export default {
  data() {
    return {
      msg: "This is the DetectOnlinePage. The permissions in app/app_resources/android/AndroidManifest.xml need to be updated with <uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/> to allow access to network status",
      networkStatus: "",
      currentNetworkStatus:"Monitor is off"
    };
  },
  computed:{
      monitorOff(){
          return this.currentNetworkStatus=="Monitor is off"
      }
  },
  methods: {
    checkNetwork() {
      const myConnectionType = connectivityModule.getConnectionType();

      switch (myConnectionType) {
        case connectivityModule.connectionType.none:
          // Denotes no Internet connection.
          console.log("No connection");
          this.networkStatus = "No connection";
          break;
        case connectivityModule.connectionType.wifi:
          // Denotes a WiFi connection.
          console.log("WiFi connection");
          this.networkStatus = "WiFi connection";
          break;
        case connectivityModule.connectionType.mobile:
          // Denotes a mobile connection, i.e. cellular network or WAN.
          console.log("Mobile connection");
          this.networkStatus = "Mobile connection";
          break;
        case connectivityModule.connectionType.ethernet:
          // Denotes a ethernet connection.
          console.log("Ethernet connection");
          this.networkStatus = "Ethernet connection";
          break;
        // Bluetooth functionality in master branch (to be released with 5.0.0)
        // case connectionType.bluetooth:
        //     // Denotes a ethernet connection.
        //     console.log("Bluetooth connection");
        //    //     break;
        default:
          break;
      }
    },
    startNetworkMonitor() {
      connectivityModule.startMonitoring(newConnectionType => {
        switch (newConnectionType) {
          case connectivityModule.connectionType.none:
            console.log("Connection type changed to none.");
            this.currentNetworkStatus = "Connection type changed to none."
            break;
          case connectivityModule.connectionType.wifi:
            console.log("Connection type changed to WiFi.");
            this.currentNetworkStatus = "Connection type changed to WiFi."
            break;
          case connectivityModule.connectionType.mobile:
            console.log("Connection type changed to mobile.");
            this.currentNetworkStatus = "Connection type changed to mobile."
            break;
          default:
            break;
        }
      });
    },
    stopNetworkMonitor() {
        connectivityModule.stopMonitoring();
        console.log("network monitor stopped");
        this.currentNetworkStatus = "Monitor is off"
    }
  }
};
</script>

<style scoped>
.description-label {
  margin-bottom: 15;
}
</style>
