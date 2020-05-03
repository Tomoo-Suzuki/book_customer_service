import axios from "axios";
// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);



export default async function request(que, key, dispatch) {
  const url = "http://localhost:7777/graphql";
  axios
    .post(url, {
      query: que
    })
    .then(function (res) {
      console.log(res)
      const hash = res.data.data[key];
      // console.log(hash)
      dispatch(hash);
    })
    .catch(function (e) {
      console.log("反映テスト01");
      console.log(e);
    });
}