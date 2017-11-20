<template>
    <footer>
        <h3>我是footer{{datas}}</h3>
    </footer>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: mapGetters([
        'datas'
    ])
}
</script>
