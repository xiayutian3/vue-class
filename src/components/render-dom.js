export default {
  functional:true,
  props:{
    // name:String,
    name:Number,
    renderFun:Function
  },
  render:(h,ctx) => {
    return ctx.props.renderFun(h,ctx.props.name)
  }
}
