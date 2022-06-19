<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;

class QuestionController extends Controller
{
    public function getQuestion(){
        $question = question::all();
        return response()->json([
            "status" => "success",
            "name" => $question
        ],200);
    }
}
