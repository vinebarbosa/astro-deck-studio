import express from 'express'
import cors from 'cors'
import open from 'open'

const app = express()

const data = [
  {
    id: '',
    index: 0,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 1,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 2,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 3,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 4,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 5,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 6,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 7,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 8,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 9,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 10,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 11,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 12,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 13,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  },
  {
    id: '',
    index: 14,
    iconPath: '',
    alternativeIconPath: '',
    label: '',
    command: {
      type: '',
      category: '',
      content: ''
    }
  }
]

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/buttons', (req, res) => {
  res.send(data)
})

app.get('/api/button', (req, res) => {
  res.send(data[Number(req.query.index)])
})

app.put('/api/button', (req, res) => {
  const { id, index, iconPath, alternativeIconPath, label, command } = req.body
  data[index] = {
    id,
    index,
    iconPath,
    alternativeIconPath,
    label,
    command
  }
  res.send(data[index])
})

app.delete('/api/button/:id', (req, res) => {
  const { id } = req.params
  const button = data.find((button) => button.id === id)

  if (button) {
    button.id = ''
    button.iconPath = ''
    button.alternativeIconPath = ''
    button.label = ''
    button.command = {
      type: '',
      category: '',
      content: ''
    }
  }

  return res.send(button)
})

app.post('/api/open/:url', (req, res) => {
  const { url } = req.params
  open(url)
  res.sendStatus(200)
})

app.listen(4000, () => {
  console.log('O pai tá on na porta 4000')
})
