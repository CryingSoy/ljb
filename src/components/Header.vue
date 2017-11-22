<template>
    <header>
        <input type="button" value="加一222" @click="jiayi">
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

