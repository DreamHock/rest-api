<?php
namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    function definition()
    {
        return [
            'category' => fake()->unique()->randomElement(['phones', 'laptops', 'cameras']),
            'nbrProducts' => 0
        ];
    }
}
