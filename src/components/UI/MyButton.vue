<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name:'my-button'
    }
</script>

<style lang="scss" scoped>
.btn{
    margin-top: 10px;
    display: flex;
    justify-content: end;
}
</style>