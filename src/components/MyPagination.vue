<template>
  <div>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="pageSize"
        layout="total,prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      tyep: Number,
      default: 100,
    },
    pageSize: {
      tyep: Number,
      default: 10,
    },
  },
  data() {
    return {
      currentPage4: 1,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
  },
};
</script>

<style scoped lang="less">
.block {
  text-align: center;
}
</style>