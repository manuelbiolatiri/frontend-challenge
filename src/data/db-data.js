import photo from '../assets/img/me.jpg'
import photo1 from '../assets/img/myself.jpg'
import photo2 from '../assets/img/andI.jpg'
import store from '../store'

export const user = {
  id: 0,
  name: 'currentUser',
  pic: photo2,
  contacts: [
    {
      id: 1,
      messages: []
    },
    {
      id: 2,
      messages: []
    },
    {
      id: 3,
      messages: []
    },
    {
      id: 4,
      messages: []
    },
    {
      id: 5,
      messages: []
    },
    {
      id: 6,
      messages: []
    },
    {
      id: 7,
      messages: []
    },
    {
      id: 8,
      messages: []
    }
  ]
}

export const data = [
  {
    id: 1,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Emmanuel',
    pic: photo2,
  },
  {
    id: 2,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Biolatiri',
    pic: photo
  },
  {
    id: 3,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Laide',
    pic: photo1
  },
  {
    id: 4,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Oscar',
    pic: photo2
  },
  {
    id: 5,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Cherish',
    pic: photo
  },
  {
    id: 6,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Jessica',
    pic: photo2
  },
  {
    id: 7,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Frank',
    pic: photo2
  },
  {
    id: 8,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Name',
    pic: photo2
  }
]

export const getUserByID = id => {
  return store
    .getState()
    .users.data.find(user => user.id.toString() === id.toString())
}
