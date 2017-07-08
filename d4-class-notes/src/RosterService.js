let roster = [
  {
    id: 1,
    name: 'Ansel Adams',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/d0/1a/42/d01a42cdc838fcd73964a1a7219f2298--ansel-adams-photography-white-photography.jpg',
    description: "Revolutionized black and white photography and helped start National Parks from his photography."
  },
  {
    id: 2,
    name: "Georgia O'Keefe",
    image: 'https://s-media-cache-ak0.pinimg.com/originals/b8/64/a5/b864a51d44dddd843bd8a9b4bc8093e7.jpg',
    description: 'Not really a photographer but a pretty legit painter.'
  },
  {
    id: 3,
    name: 'Richard Avedon',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/61/66/e2/6166e23d5b8db3175feed8af824fdbe9.jpg',
    description: 'Classy white background with famous people anyone?'
  },
  {
    id: 4,
    name: 'Sally Mann',
    image: 'https://www.washingtonian.com/wp-content/uploads/2015/04/2015.04.27.sallymann-1215-994x673.jpg',
    description: "Showing that being a mother doesn't stop you from being incredible."
  },
  {
    id: 5,
    name: 'Vivian Maier',
    image: 'https://static01.nyt.com/images/2014/09/06/arts/06HEIR/06HEIR-master1050.jpg',
    description: "The Van Gogh of photographers. People are amazed by her work but was never noticed while she was living."
  },
]

export function getRoster() {
  return roster
}

export function getPlayer(id) {
  let player = roster.filter(e => e.id === +id)[0]
  return player
}