<template>
  <Page class="page">
    <ActionBar
      class="action-bar"
      title="SQLite Demo"
    ></ActionBar>
    <GridLayout
      rows="auto, *"
      columns="*"
    >
      <StackLayout
        class="form"
        row="0"
        col="0"
      >
        <StackLayout class="input-field">
          <Label
            text="First Name"
            class="label font-weight-bold m-b-5"
          />
          <TextField
            class="input"
            v-model="input.firstname"
          />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="input-field">
          <Label
            text="Last Name"
            class="label font-weight-bold m-b-5"
          />
          <TextField
            class="input"
            v-model="input.lastname"
          />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <GridLayout
          rows="auto, auto"
          columns="*, *"
        >
          <Button
            text="Save"
            @tap="insert"
            class="btn btn-primary"
            row="0"
            col="0"
          />
          <Button
            text="Load"
            @tap="fetch"
            class="btn btn-primary"
            row="0"
            col="1"
          />
          <Button
            text="Clear"
            @tap="clear"
            class="btn btn-primary"
            row="1"
            col="0"
            colSpan="2"
          />
        </GridLayout>
      </StackLayout>
      <ListView
        for="person in people"
        class="list-group"
        row="1"
        col="0"
      >
        <v-template>
          <!--<GridLayout
            rows="*"
            columns="auto, *"
            class="list-group-item"
          >
            <Label
              row="0"
              col="0"
              v-bind:text="person.firstname + ' ' + person.lastname"
            />
            <Button
              text="delete"
              @tap="kill(person)"
              class="btn btn-outline btn-rounded-lg"
              row="0"
              col="1"
              width="120"
            />
          </GridLayout>-->
          <FlexboxLayout alignItems="center" justifyContent="space-between" class="p-x-5 list-group-item">
            <Label v-bind:text="person.firstname + ' ' + person.lastname" />
            <Button
              text="delete"
              @tap="kill(person)"
              class="btn btn-outline btn-rounded-lg"
              width="100"
            />
          </FlexboxLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<script>
const Sqlite = require("nativescript-sqlite");

export default {
  data() {
    return {
      msg: "This is the SQLitePage.  ",
      database: null,
      people: [],
      input: {
        firstname: "jo",
        lastname: "Smith"
      },
      unput: {
        firstname: "",
        lastname: ""
      },
      loading: true
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      new Sqlite("my.db").then(
        db => {
          db.execSQL(
            "CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)"
          ).then(
            id => {
              this.database = db;
            },
            error => {
              console.log("CREATE TABLE ERROR", error);
            }
          ).then(() => this.fetch());
        },
        error => {
          console.log("OPEN DB ERROR", error);
        }
      );
    },
    insert() {
      this.database
        .execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [
          this.input.firstname,
          this.input.lastname
        ])
        .then(
          id => {
            console.log("INSERT RESULT", id);
            this.fetch();
          },
          error => {
            console.log("INSERT ERROR", error);
          }
        );
    },
    remove() {
      this.database
        .execSQL("DELETE FROM people WHERE firstname=(?) AND lastname=(?)", [
          this.unput.firstname,
          this.unput.lastname
        ])
        .then(
          id => {
            console.log("INSERT RESULT", id);
            this.fetch();
          },
          error => {
            console.log("INSERT ERROR", error);
          }
        );
    },
    fetch() {
      this.database
        .all("SELECT * FROM people")
        .then(
          rows => {
            this.people = [];
            for (var row in rows) {
              this.people.push({
                firstname: rows[row][1],
                lastname: rows[row][2]
              });
            }
          },
          error => {
            console.log("SELECT ERROR", error);
          }
        )
        .then(() => {
          this.loading = false;
          console.log(this.people);
        });
    },
    clear() {
      this.input.firstname = "";
      this.input.lastname = "";
    },
    kill(person) {
      console.log(person);
      this.unput = person;
      this.remove();
    }
  }
};
</script>

<style scoped>
.description-label {
  margin-bottom: 15;
}
</style>
