<template>
    <div>
        <input type='text' :value='inputValue'  @input='inputHandler'>
    </div>
</template>

<script>
    export default {
        props:{
            value: {type:String,default:''}
        },
        data() {
            return {
                inputValue: this.value
            }
        },
        methods: {
            inputHandler(e) {
                this.inputValue= e.target.value
                this.$emit('input', this.inputValue)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>