exports.post = function (req, res) {
  if (!req.body.content) throw 422;

  return req.db.collection('tweets').insert({
    content: req.body.content.slice(0, 140),
    created_at: new Date()
  });
};
