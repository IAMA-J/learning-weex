const modal = weex.requireModule('modal');
const dom = weex.requireModule('dom')
export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
     newsDetails(toUrl){
         this.$router.push('/news'+'/'+toUrl)
     },
      themeView(themeId){
         this.$router.push('/theme'+'/'+themeId)
      },
      tnewsDetails(toUrl){
          this.$router.push('/tnews'+'/'+toUrl)
      },
  }
}
