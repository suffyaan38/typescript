import {Router} from 'express';
import {Todo} from '../models/todo'
const todos:Todo[]=[];
const router=Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({message:"TODO added"});
})

router.delete('/delTodo:id',(req,res,next)=>{
    const id=req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(todoIndex, 1);
    res.status(200).json({message:"todo deleted"})
})
export default router;