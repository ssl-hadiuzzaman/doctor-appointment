<?php

namespace App\Models\Admin;

use App\Http\Resources\MedicineResource;
use App\Models\Medicine;
use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;

class MedicineController extends Model
{
    public function index()
    {

        return Inertia::render('Medicine/Index', [
            'medicines' => MedicineResource::collection( Medicine::all())
        ]);
    }
}
