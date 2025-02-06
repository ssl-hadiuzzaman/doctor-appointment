<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dose extends Model
{
    /** @use HasFactory<\Database\Factories\DoseFactory> */
    use HasFactory;

    protected $fillable = ['name'];

    static public $data = [
        '1 + 1 + 1',
        '1 + 1 + 0',
        '1 + 0 + 1',
        '0 + 1 + 1',
        '1 + 0 + 0',
        '0 + 1 + 0',
        '0 + 0 + 1'
    ];
}
