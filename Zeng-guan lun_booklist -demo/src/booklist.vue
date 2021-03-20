<template>
<div class="global">
<div class="container">
      <div
        v-for="(content,index) in contents"
        :key="content.id"
      >
      <router-link :to="`/books/${content.id}`">
        <b-card
          class="cardbody"
          :class="{'select':index.selected}"
          :Id="content.id"
          @click="showDetail(index)"
        >
       <img :src="content.image" class="cardImg">
          <b-card-text class="cardtext">
            {{ content.name }}           
          </b-card-text>     
        </b-card>
          </router-link>
      </div>   
  
</div>
<div class="detailArea">
       <router-view v-show='seeDetail'></router-view>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "booklist",
  data() {
    return {
      contents: [],
      seeDetail: false,
      selected:false,
    };
  },

  methods: {
    showDetail: function(index){
      this.seeDetail=true;
      index.selected = ! index.selected;
    }
    
  },

  created: function () {
    axios.get("https://fe-interview-api.unnotech.com/books").then(
      (response) => {
        this.contents = response.data.slice(0,6);
      },
      () => {
        console.log("伺服器或網路發生錯誤! 請重新整理後再試一次");
      }
    )},
};
</script>

<style>
@media screen and (min-width: 1101px){
  .global{
  width: 100%;
  display: block;
  justify-content: center;
  text-align: center;
}

.container{
  width: 300%;
  min-height: 60vh;
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  -ms-overflow-x: auto;
  -ms-overflow-y: auto;
  margin-bottom: 2rem;
}



.cardbody{
  
  max-width: 15rem;
  text-align: center;
  margin: 3rem;
}

.cardImg{
  height: 15rem;
  justify-self: center;
}

.cardtext{
  font-size: 14px;
  padding: 0.5rem;
}

.detailArea{
 width: 100%;
 padding: 0 30rem 0 30rem ;
 justify-content: center;
}

.select{
  background: red;
}
}

@media screen and (min-width: 700px)and (max-width: 1100px) {

.global{
  width: 100%;
  display: block;
  justify-content: center;
  text-align: center;
}

.container{
  width: 300%;
  min-height: 60vh;
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  -ms-overflow-x: auto;
  -ms-overflow-y: auto;
  margin-bottom: 2rem;
}



.cardbody{
  
  max-width: 15rem;
  text-align: center;
  margin: 3rem;
}

.cardImg{
  height: 15rem;
  justify-self: center;
}

.cardtext{
  font-size: 14px;
  padding: 0.5rem;
}

.detailArea{
 width: 100%;
 padding: 0 10rem 0 10rem ;
 justify-content: center;
}

.select{
  background: red;
}

}

@media screen and (max-width: 699px) {


.container{
  max-height: 60vh;
  overflow-y: auto;
}



.cardbody{
  max-width: 15rem;
  text-align: center;
  margin: 3rem;
}

.cardImg{
  height: 15rem;
  justify-self: center;
}

.cardtext{
  font-size: 14px;
  padding: 0.5rem;
}

.detailArea{
 width: 100%;
 padding: 0 2rem 0 2rem ;
 justify-content: center;
}

.select{
  background: red;
}
}
</style>


   
