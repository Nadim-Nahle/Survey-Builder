<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;
use App\Models\type;

class AdminController extends Controller
{
    public function addSurvey(Request $request){
        $survey = new survey;
        $survey->title = $request->title;
        $survey->description = $request->description;
        //$survey->category_id = '1'; 
        
        $survey->save();
            
        return response()->json([
            "status" => "Success",
            "id"=> $survey->id,
            "title"=> $survey->title,
            "desc"=> $survey->description
            ], 200);
     }
    public function addQuestion(Request $request){
        $question = new question;
        $question->question_name = $request->question_name;
        //$question->type_id = $request->type_id;
        //$question->category_id = '1';
        $question->survey_id = $request->survey_id;
        
        
        $question->save();
            
        return response()->json([
            "status" => "Success",
            "id"=> $question->id,
            ], 200);
     }
    public function addType(Request $request){
        $type = new type;
        $type->question1 = $request->question1;
        $type->question2 = $request->question2;
        $type->question3 = $request->question3;

        $type->question_id = $request->question_id;

        
        $type->save();
            
        return response()->json([
            "status" => "Success",
            "id"=> $type->id,
            ], 200);
     }

     
}
