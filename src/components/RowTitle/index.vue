<template>
  <div class="row-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'RowTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.row-title{
  font-size: 18px;
  color: #343434;
  background: #f5f5f5;
  border-left: 4px solid #00bff0;
  padding: 8px 0 8px 8px;
  text-align: left;
}
</style>
