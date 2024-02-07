const v = process.env.DB_URI
const GET = (r) => {
  return Response.json({messahe : v})
}

export {GET}