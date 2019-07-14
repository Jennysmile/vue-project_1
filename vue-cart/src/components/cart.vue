<template>
    <div>
        <table>
            <tr>
                <th>#</th>
                <th>商品名</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for='(c,index) in cart' :key='c.text'>
               <td><input type="checkbox" v-model='active'></td>
               <td>{{c.text}}</td>
               <td>￥{{c.price}}</td>
               <td>
                   <button @click='minus(index)'>-</button>
                   {{c.count}}
                   <button @click='plus(index)'>+</button>
                </td>
               <td>￥{{c.price*c.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{ratio}}</td>
                <td colspan="2">{{money}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props:['cart'],
        data(){
            return{
                active: true

            }
        },
        methods:{
            minus(i){
                this.cart[i].count -= 1
            },
            plus(i){
                this.cart[i].count += 1
            }
        },
        computed:{
            ratio(){
                const fenzi= this.cart.filter(v=>v.active===true).length
                const fenmu = this.cart.length
                return fenzi+'/'+fenmu
            },
            money(){
                const arr = this.cart.filter(v=>v.active===true)
                let m=0
                for(let i =0; i<arr.length; i++){    
                    m += arr[i].count*arr[i].price
                }
                return m
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>