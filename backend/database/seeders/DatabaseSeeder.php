<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->truncate();
        for ($i = 0; $i < 100; $i++) {
            DB::table('items')->insert([
                'codeno' => $i,
                'name' => 'Kyaw',
                'photo' => '/backend/categoryimg/1598799850.jpeg',
                'price' => '2000',
            ]);
        }
    }
}
