// const serverError = (err, _req, res, next) => {
//     res.status(500).json({msg: err.message})
// }

// export default serverError;

// alternaitive
export default function serverError(err, _req, res, next) {
  res.status(500).json({ msg: err.message });
}
