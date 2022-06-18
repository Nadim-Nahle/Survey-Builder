<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Http\Requests\StoreAnswerRequest;
use App\Http\Requests\UpdateAnswerRequest;
use Illuminate\Http\Request;

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

    public function getAnswers(Request $request){
        $question_id=$request->question_id;
        $answers= Answer::where("question_id", $question_id)->get();
        return response()->json([
            "status"=>"Success",
            "answers"=>$answers
        ],200);
    }
    
}
