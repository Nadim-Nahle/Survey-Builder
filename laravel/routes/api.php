<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\QuestionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//VERSION ---1---
Route::group(['prefix' => 'v1'], function (){

    //User GROUP
    Route::group(['prefix' => 'user'], function (){

        Route::group(['middleware'=>'api', 'prefix' => 'auth'],function($router){

            Route::post('/register', [AuthController::class, 'register']);
            Route::post('/login', [AuthController::class, 'login']);
            Route::get('/profile', [AuthController::class, 'profile']);
            Route::post('/logout', [AuthController::class, 'logout']);
            
        });
    });

        //Answer GROUP 
    Route::group(['prefix' => 'ans'], function (){ 
        
        Route::group(['middleware' => 'role.user'], function(){

            Route::post('/addans', [AnswerController::class, 'addAns']);
            Route::get('/ans/{id?}', [AnswerController::class, 'getAns']);
            Route::get('/answer', [AnswerController::class, 'getAnswers']);
        });
    });

    //ADMIN GROUP
    Route::group(['prefix' => 'admin'], function (){

        Route::group(['middleware' => 'role.admin'], function(){

            Route::post('/addsurvey', [AdminController::class, 'addSurvey']);
            Route::post('/addquestion', [AdminController::class, 'addQuestion']);
            Route::post('/addtype', [AdminController::class, 'addType']);
        });       
      
    });

    //No Authorization

    Route::get('/survey', [TypeController::class, 'getSurvey']);
    Route::get('/question', [QuestionController::class, 'getQuestion']);

});       
      
    
     

