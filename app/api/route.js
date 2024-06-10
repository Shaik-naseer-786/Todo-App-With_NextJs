import ConnectDB from "@/lib/config/db";
import Todo from "@/lib/config/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function GET(request) {
  const todos = await Todo.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    return NextResponse.json({ msg: 'Todo created!', todo: newTodo });
  } catch (error) {
    console.error('Error creating Todo:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


  
