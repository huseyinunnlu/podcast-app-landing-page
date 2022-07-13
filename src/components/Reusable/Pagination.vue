<template>
  <div class="d-flex justify-content-between align-items-center my-4">
    <select
      class="form-select form-select-sm h-auto"
      style="width: 150px"
      v-model="pageCount"
      @change="changePageCount()"
    >
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
      <option :value="25">25</option>
      <option :value="50">50</option>
      <option :value="100">100</option>
    </select>

    <ul class="pagination" v-if="paginationData.length > 0">
      <li
        class="page-item"
        :class="(!i.url ? 'disabled' : '', i.active ? 'active' : '')"
        :disabled="!i.url"
        v-for="(i, index) in paginationData"
        :key="index"
        @click="i.url ? changePage(i.url) : ''"
        style="cursor: pointer"
      >
        <a
          class="page-link"
          v-html="i.label"
          :class="i.active ? 'active' : ''"
        ></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["paginationData"],
  data() {
    return {
      pageCount: this.$route.query.page_count || 15,
      page: this.$route.query.page || 1,
    };
  },
  methods: {
    changePageCount() {
      this.$emit("pageChanged", { page_count: this.pageCount });
    },
    changePage(data) {
      const query = data.split("?");
      const page = query[query.length - 1];
      this.$emit("pageChanged", { page: page.replace("page=", "") });
    },
  },
};
</script>
