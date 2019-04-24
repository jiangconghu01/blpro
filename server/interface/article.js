import Router from 'koa-router'
import Article from '../dao/artmodels/article.mo.js'

let router = new Router({ prefix: '/article' })
router.post('/savearticle', async ctx => {
  const { title, tag, markdownValue, htmlValue } = ctx.request.body
  const res = await insert({ title, tag, markdownValue, htmlValue })
  console.log(res)
  ctx.body = {
    code: res
  }
})
const insert = obj => {
  return new Promise((resolve, reject) => {
    Article.create([obj], function(err, doc) {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(['SUCCESS'])
        resolve(doc)
      }
    })
  })
}
export default router
