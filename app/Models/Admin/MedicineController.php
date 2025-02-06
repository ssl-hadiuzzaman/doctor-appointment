<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;

class MedicineController extends Model
{
    public function index()
    {

        return Inertia::render('Medicine/Index');
    }
}
