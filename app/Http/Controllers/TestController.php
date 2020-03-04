<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Project;

class TestController extends Controller
{
    public function index()
    {
        //
        $projects = Project::all();
        return $projects;
    }

}