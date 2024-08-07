import {Client, Account, Databases } from "appwrite"

const client = new Client()

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject("66a358db0014ce9ec7fa")

export const account = new Account(client)
export const databases = new Databases(client)