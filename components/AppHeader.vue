<template>
  <a-layout id="navbar" class="layout">
    <a-layout-header>
      <div class="logo">C r i c I n f o</div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
        id="hide-nav"
      >
        <NuxtLink to="/teams"
          ><a-menu-item key="1">Teams</a-menu-item></NuxtLink
        >
        <NuxtLink to="/"><a-menu-item key="2">Players</a-menu-item></NuxtLink>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Nunito+Sans&display=swap');

.logo {
  height: 31px;
  float: left;
  font-family: 'Comfortaa', cursive;
  color: #000;
  font-size: 30px;
  font-weight: 700;
  text-shadow: 4px -1px rgb(244, 202, 27);
  height: auto;
}

#navbar .ant-layout-header {
  border-bottom: 2px solid #373737;
  background: #d6d4c8;
  height: 66px;
}

#navbar .ant-menu-dark {
  background: #d6d4c8;
  display: flex;
  flex-direction: row-reverse;
}

#navbar .ant-menu-item {
  background-color: #d6d4c8;
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
}

#navbar .ant-menu-item-active,
#navbar .ant-menu-item-selected,
#navbar .nuxt-link-active,
#navbar .nuxt-link-exact-active {
  font-weight: 700;
  font-size: 20px;
}

@media screen and (max-width: 460px) {
  #navbar #hide-nav {
    display: none;
  }
}
</style>
