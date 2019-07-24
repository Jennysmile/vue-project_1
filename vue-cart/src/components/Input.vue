<template>
    <div>
        {{someValue}}
        <input :type='type' :value='inputValue'  @input='inputHandler'>
    </div>
</template>

<script>
    export default {
        inject:['someValue'],
        props:{
            value: {type:String,default:''},
            type:{type:String,default:'text'}
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
                //发送事件，要校验
                this.$parent.$emit('validate',this.inputValue)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>