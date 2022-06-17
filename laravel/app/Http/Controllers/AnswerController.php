<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Http\Requests\StoreAnswerRequest;
use App\Http\Requests\UpdateAnswerRequest;

class AnswerController extends Controller
{
    
    public function getAns($id = null){
        if($id){
            $answer = answer::find($id);
        }
        else{
            $answer = answer::all();
        }

        return response()->json([
            "status" => "success",
            "answers" => $answer
        ],200);
    }
}
