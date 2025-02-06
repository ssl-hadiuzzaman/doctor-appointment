<?php

namespace Database\Seeders;

use App\Models\Dose;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        foreach(Dose::$data as $item){
            Dose::create([
                'name' => $item
            ]);
        }

    }
}
