<?php

namespace App\Http\Controllers;

use App\Models\Type;
use App\Models\Question;
use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function getSurvey(){
        $type = type::join('questions','questions.id', '=', 'types.question_id')
                        ->get(['types.question1', 'types.question2', 'types.question3' , 'questions.question_name']);

       
            
        return response()->json([
            "status" => "Success",
            "survey"=> $type,
            ], 200);
     }

     
}

