import db from "../database/db_connect.js";
import 'dotenv/config'

export const findAll = async() => await db('SELECT * FROM posts;')

export const findById = async(id) => await db('SELECT * FROM posts WHERE id = $1;',[id])

export const create = async(titulo, url, descripcion) => 
    await db('INSERT INTO posts(id, titulo, img, descripcion) VALUES (default, $1, $2, $3) RETURNING *;',[titulo, url, descripcion])



findAll()