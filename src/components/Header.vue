<template>
    <header>
        <h1>我是header</h1>
        <input type="button" value="加一" @click="jiayi">
    </header>
</template>
<script>
export default {
    methods:{
        jiayi(){
            this.$store.dispatch('jiayi');
        }
    }
}
</script>

