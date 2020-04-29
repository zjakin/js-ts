const validateRequest = (sch) => {
  return (req, res, next) => {
    let validationError = null;

    Object.keys(sch).forEach(key => {
      const schema = sch[key];
      const value = req[key];
      const { error } = schema.validate(value);
      const valid = error == null;
      if (!valid) {
        validationError = error
      }
    });

    if (!validationError) {
      next();
    } else {
      const { details } = validationError;
      const message = details.map(i => i.message).join(',');

      console.log("error", message);
      res.status(400).json({ error: message });
    }
  }
};

module.exports = validateRequest;
