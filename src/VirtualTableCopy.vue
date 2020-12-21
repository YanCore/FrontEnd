<template>
  <div>
    <RecycleScroller :items="items" :item-size="32" key-field="_id">
      <template slot="before">
        <div :key="header" class="th" v-for="header in headers">
          {{ header }}
        </div>
      </template>
      <template slot-scope="{ item }">
        <div class="td">{{ item.name }}</div>
        <div class="td">{{ item.age }}</div>
        <div class="td">{{ item.company }}</div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script>
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import items from "./data.json";

export default {
  components: {
    RecycleScroller,
  },
  data: () => ({
    items: items.slice(0, 1000),
    headers: ["Age", "Name", "Company"],
  }),
};
</script>

<style>
.scroller {
  height: 100vh;
}
.vue-recycle-scroller__slot,
.vue-recycle-scroller__item-view {
  display: flex;
  width: 100%;
}
.th,
.td {
  flex: 1;
}
.vue-recycle-scroller__slot .th:first-child,
.vue-recycle-scroller__item-view .td:first-child {
  flex: 2;
}
</style>
