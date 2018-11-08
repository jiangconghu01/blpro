<template>
  <div class="com-container-sidetitle">
    <h2><slot></slot></h2>
  </div>
</template>
<style lang="scss">
.com-container-sidetitle {
  h2 {
    position: relative;
    font-size: 1.8 * $fontbase;
    font-weight: 600;
    margin-bottom: 20px;
    color: #282828;
    padding-bottom: 15px;
    &:after {
      content: '';
      background-color: #282828;
      left: 0;
      width: 50px;
      height: 2px;
      bottom: 0;
      position: absolute;
      transition: all 0.5s ease;
    }
    &:hover:after {
      width: 100%;
    }
  }
}
</style>
