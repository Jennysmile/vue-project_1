<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="validateStatus === 'error'" class='error'>{{errorMessage}}</p>
    </div>
</template>

<script>
    export default {
        props:['label','prop'],
        data() {
            return {
                validateStatus:'',
                errorMessage : ''
            }
        },
    }
</script>

<style  scoped>
    .error{
        color:red
    }
</style>