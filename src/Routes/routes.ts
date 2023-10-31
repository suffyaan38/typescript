import {Router} from 'express';
import {Todo} from '../models/todo'
const todos:Todo[]=[];
const router=Router();
type requestBody={text:string}
type requestParams={id:string}
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res,next)=>{
    const body=req.body as requestBody;
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text,
    };
    todos.push(newTodo);
    res.status(201).json({message:"TODO added"});
})

router.delete('/delTodo:id',(req,res,next)=>{
    const params=req.params as requestParams;
    const id=params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(todoIndex, 1);
    res.status(200).json({message:"todo deleted"})
})
export default router;