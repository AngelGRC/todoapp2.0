import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Todo } from "../entity/Todo";

export const getTodos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(Todo).find();
  return res.json(users);
};

export const getTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Todo).findOne(req.params.id);
  return res.json(results);
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTodo = await getRepository(Todo).create(req.body);
  const results = await getRepository(Todo).save(newTodo);
  return res.json(results);
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const todo = await getRepository(Todo).findOne(req.params.id);
  if (todo) {
    getRepository(Todo).merge(todo, req.body);
    const results = await getRepository(Todo).save(todo);
    return res.json(results);
  }

  return res.json({msg: 'Not todo found'});
};

export const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Todo).delete(req.params.id);
  return res.json(results);
};
