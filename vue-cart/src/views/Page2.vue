<template>
    <div>
        <h3>page2</h3>
        <p>{{$route.params.id}}</p>
        <p>{{$route.params.msg}}</p>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route.query)
        }
        
    }
</script>

<style lang="scss" scoped>

</style>