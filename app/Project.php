<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $fillable = [
        'title',
        'description'
    ];

    /**
     * Get the tasks related to project
     */
    public function tasks()
    {
        return $this->hasMany('App\Task');
    }


}
