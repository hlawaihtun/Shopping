<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'photo'
    ];

    public function subcategories($value = '')
    {
        return $this->hasMany('App\Subcategory');
    }
}
