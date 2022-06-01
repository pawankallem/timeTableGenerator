const post = (model) => async (req, res) => {
    try {
      const item = await model.create(req.body);
  
      return res.status(201).send(item);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const getAll = (model) => async (req, res) => {
    try {
      const items = await model.find().lean().exec();
  
      return res.send(items);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
    
  module.exports = (model) => {
    return {
      post: post(model),
      getAll: getAll(model),
    };
  };
  