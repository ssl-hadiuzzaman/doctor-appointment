<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoseTime extends Model
{
    /** @use HasFactory<\Database\Factories\DoseTimeFactory> */
    use HasFactory;

    protected $fillable = ['name'];

    static public $data = [
        'After meal',
        'Before meal'
    ];
}
