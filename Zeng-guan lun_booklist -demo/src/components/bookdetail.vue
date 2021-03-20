<template>
  <div>
    <label for="demo-sb">價格</label>
    <b-form-spinbutton
      id="price"
      v-model="detail.price"
      min="0"
      max="9999999999999"
    ></b-form-spinbutton>

    <label for="demo-sb">數量</label>
    <b-form-spinbutton
      id="stock"
      v-model="detail.count"
      min="0"
      max="9999999999999"
    ></b-form-spinbutton>
    <b-button variant="primary" @click="submit" class="btn">確認修改</b-button>
    <b-button variant="danger" @click="back" class="btn">關閉</b-button>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "bookdetail",
  computed: {
    bookId() {
      return this.$route.params.bookId;
    },
  },
  data() {
    return {
      detail: {
        id: "",
        price: "",
        count: "",
      },
    };
  },

  watch: {
    bookId: async function (val) {
      this.bookId = await this.fetchBookDetail(val);
    },
  },

  methods: {
    async fetchBookDetail(id) {
      return await fetch("https://fe-interview-api.unnotech.com/profile/" + id)
        .then((response) => response.json())
        .then((json) => json);
    },

    submit() {
      axios
        .patch(
          "https://fe-interview-api.unnotech.com/profile/" + this.detail.id,
          this.detail
        )
        .then(
          () => {
            console.log(this.detail);
            setTimeout(alert("修改成功!"), 100);
          },
          () => {
            console.log("伺服器或網路發生錯誤! 請重新整理後再試一次");
          }
        );
    },

    back() {
      this.$router.push("/");
    },
  },

  async created() {
    this.detail = await this.fetchBookDetail(this.bookId);
  },
};
</script>

<style scoped>
a {
  color: white;
}

.btn {
  margin: 1rem;
}
</style>
