<template>
    <div class="navbar">
        <div>Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/about')" class="btnZ">О сайте</my-button>
            <my-button @click="$router.push('/post')" class="btnZ">Посты</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.navbar{
  
    background-color: green;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 10px;
    &__btns{
        height: 100%;
        margin-left: auto;
        
    }
    .btnZ{
        margin-left: 5px;
    }
}
</style>