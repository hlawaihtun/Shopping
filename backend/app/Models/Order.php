<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['voucherno', 'orderdate', 'status', 'note', 'total', 'user_id'];
    // oreder_item
    public function items()
    {
        return $this->belongsToMany('App\Item', 'order_detail')
            ->withPivot('qty')
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    use HasFactory;
}
