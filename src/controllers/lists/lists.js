let lists = require('../../../data')
lists = lists.boards[0].lists
const ERROR = {message: '404. Not Found'}

const controllers = {
  index: (req, res) => {
    res.status(200).json({msg: lists})
  },

  find: (req, res) => {
    const queryId = req.params.id
    const validation = lists.some(list => list.id == queryId)

    if(validation){
    const list = lists.filter(list => list.id.toString() == queryId )
     res.status(200).json({msg: list})
    } else {
    res.status(404).json(ERROR);
    }
  },

  create: (req, res) => {
    const id = lists.length + 1
    res.status(200).json({lists: [...lists, {id, ...req.body }]})
  },

  update: (req, res) => {
    const queryId = req.params.id
    const validation = lists.some(list => list.id == queryId)
    if(validation) {
       const dataUpdated = lists.map(list => {
           return (queryId == list.id) ? req.body : list;
         })
         res.status(200).json({msg: dataUpdated})
      }
    },

    delete: (req, res) => {
      const cards = lists.filter( list => list.cards)

      if(cards.length > 0){
        const queryId = req.params.id
        const validation = lists.some(list => list.id == queryId)
          if(validation){
            const exist = lists.filter(list => {
              return list.id.toString() !== queryId
            })
             res.status(200).json({msg: exist})
          }
      } else {
        res.status(404).json({message: "There are no cards"})
      }
    },
    cards: (req, res) => {
      const find = lists.filter(list => list.id == req.params.id)[0]
      if (find){
          res.status(200).json({msg:find.cards})
      } else {
      res.status(404).json(ERROR);
      }
    }
}
module.exports = controllers;
