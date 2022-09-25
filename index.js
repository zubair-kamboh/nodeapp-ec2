const express = require('express')

const app = express()

app.use('/app', express.static('./public'))

app.get('/', (req, res) => {
  res.json({
    name: 'zubair',
    email: 'zubairkamboh9010@gmail.com',
  })
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`app running on port ${port}`))
