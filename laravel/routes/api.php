<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AnswerController;

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

    //ITEMS GROUP
    Route::group(['prefix' => 'user'], function (){

        Route::group(['middleware'=>'api', 'prefix' => 'auth'],function($router){

            Route::post('/register', [AuthController::class, 'register']);
            Route::post('/login', [AuthController::class, 'login']);
            Route::get('/profile', [AuthController::class, 'profile']);
            Route::post('/logout', [AuthController::class, 'logout']);
            
        });
    });

        //FAVOURITES GROUP 
    Route::group(['prefix' => 'ans'], function (){ 
        
        Route::group(['middleware' => 'role.user'], function(){

            Route::post('/addans', [AnswerController::class, 'addAns']);
            Route::get('/ans/{id?}', [AnswerController::class, 'getAns']);
        });
    });
     
});
