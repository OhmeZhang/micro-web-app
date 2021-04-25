<template>
    <div class="hello">
        hello
        <button @click="childStoreChange">child add</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'HelloWorld',

    computed: {
        ...mapState(['baseAppSetting'])
    },

    watch: {
        baseAppSetting: {
            handler(newVal) {
                const {num} = newVal;
                console.log(num);
            },
            deep: true,
            immediate: true
        }
    },

    created() {
        console.log(this.$selfStore.state);
    },

    methods: {
        childStoreChange() {
            this.$store.dispatch('childAdd');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
