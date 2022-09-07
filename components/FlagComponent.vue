<template>
    <div 
        class=" is-align-self-center flag small ml-4"
        :class="getColorStyle"
    >
    </div>
</template>
<script>  
export default {
    name: 'FlagComponent',
    data() {
        return {
        }
    },
    props: {
        color:{
            type: String,
        }
    },
    computed:{
        getColorStyle(){
            return {
                red: this.color === 'red',
                yellow: this.color === 'yellow',
                green: this.color === 'green'
            }
        }
    }
}
</script>