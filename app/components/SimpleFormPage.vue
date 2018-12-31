<template>
  <Page class="page">
    <ActionBar title="NS-v Code samples" />
    <ScrollView>
      <StackLayout class="home-panel padded-sc">
        <Label
          textWrap="true"
          text="Enter your data below"
          class="h2 description-label"
        />
        <TextField
          class="input"
          hint="Email"
          keyboardType="email"
          autocorrect="false"
          autocapitalizationType="none"
          v-model="data.email"
          returnKeyType="next"
        ></TextField>
        <TextField
          class="input"
          ref="password"
          hint="Password"
          secure="true"
          v-model="data.password"
        ></TextField>
        <DatePicker
          :year="data.birthYear"
          :month="data.birthMonth"
          :day="data.birthDay"
          minDate="1970-01-01"
          maxDate="2100-12-31"
        /> 
        <ListPicker :items="listPickerItems" v-model="data.selectedPickerItem" />
        <Button
          class="btn btn-rounded-sm btn-primary"
          :text="display ? 'Hide' : 'Submit'"
          @tap="onSubmit()"
        />
        <StackLayout v-show='display'>
          <Label
            :text="'Your email is ' + data.email"
            class="h2 description-label"
          />
          <Label
            :text="'Your password is ' + data.password"
            class="h2 description-label"
          />
          <Label
            :text="'Your birthday is ' + data.birthMonth + '/' + data.birthDay + '/' + data.birthYear"
            class="h2 description-label"
          />
          <Label
            :text="'You selected ' + listPickerItems[data.selectedPickerItem]"
            class="h2 description-label"
          />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      listPickerItems:[
          "I am Male",
          "I am Female",
          "I am Steve Eynon"
        ],
      data: {
        email: "",
        password: "",
        birthDay: new Date().getUTCDate(),
        birthMonth: new Date().getUTCMonth() + 1,
        birthYear: new Date().getUTCFullYear(),
        selectedPickerItem: 0
      }
    };
  },
  methods: {
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    onSubmit() {
      this.display = !this.display;
    }
  }
};
</script>

<style scoped>
.description-label {
  margin-bottom: 15;
}
.padded-sc {
  padding: 50px;
}
</style>
