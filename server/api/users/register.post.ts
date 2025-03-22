import { tables, useDrizzle } from '~~/server/utils/drizzle'
// TODO: This is only an example
export default eventHandler(async () => {
  const user = await useDrizzle().insert(tables.users).values({}).returning().get()

  return user
})
