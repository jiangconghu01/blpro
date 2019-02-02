import Router from 'koa-router'
import Article from '../dao/models/article.mo.js'

let router = new Router({ prefix: '/article' })
router.get('/savearticle', async ctx => {
  const m = ctx.request.body
  console.log(ctx.request)
  //const { title, tag, markdownValue, htmlValue } = ctx.request.body

  //let art = await Article.create({ title, tag, markdownValue, htmlValue })
  ctx.body = {
    a: 99,
    b: 55
  }
})

export default router
