<template>
    <div>
        <h3>page1</h3>
        <p><button @click='goToPage2'>跳转到page2</button></p>
        <p>{{foo}}</p>
        <p>{{bar}}</p>
        <p>{{id}}</p>
    </div>
</template>

<script>
    export default {
        props: ['foo','bar','id'],
        methods: {
            goToPage2() {
                this.$router.push({name:'page2',params:{id:1,msg:'vuejs'}})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>