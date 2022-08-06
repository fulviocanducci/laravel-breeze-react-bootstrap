<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index() {
        $todos = Todo::paginate();
        return Inertia::render('Todo/Index', ['todos' => $todos]);
    }
    public function create() {
        return Inertia::render('Todo/Create');
    }
    public function edit(Todo $todo) {
        return Inertia::render('Todo/Edit', ['todo' => $todo]);
    }

    public function store() {
        $data = Request::validate([
            'id' => ['required'],
            'title' => ['required', 'max:100'],
            'description' => ['required', 'max:100'],
        ]);
        if ($data['id'] > 0) {
            Todo::whereId($data['id'])
                ->update($data);
        } else {
            Todo::create($data);
        }
        return Redirect::route('todo.index');
    }
}
