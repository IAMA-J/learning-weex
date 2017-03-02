const modal = weex.requireModule('modal');
const dom = weex.requireModule('dom')
export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
     newsDetails(event){
         modal.toast({ message: 'loadmore'+this.attr('id'), duration:10 })
         this.$router.push('/news/1111')
     }
  }
}
