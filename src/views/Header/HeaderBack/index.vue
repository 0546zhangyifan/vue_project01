<template>
  <nav>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        <router-link :to='item.toUrl' class="link" :class="{ active:index===current }" @click="btnList(index)">{{ item.listName }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<style lang='scss' scoped>
</style>
