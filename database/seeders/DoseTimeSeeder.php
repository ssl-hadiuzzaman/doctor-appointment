<?php

namespace Database\Seeders;

use App\Models\DoseTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoseTimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach(DoseTime::$data as $item){
            DoseTime::create([
                'name' => $item
            ]);
        }
    }
}
