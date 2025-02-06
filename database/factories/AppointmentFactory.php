<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $createdAt = fake()->dateTimeBetween('-1 month', 'now'); // Random created_at time

        return [
            'name' => fake()->name(), // Random name
            'age' => fake()->numberBetween(18, 80), // Random age between 18 and 80
            'number' => fake()->phoneNumber(), // Random phone number
            'schedule' => fake()->dateTimeBetween('-1 month', 'now'), // Random schedule date
            'visited' => fake()->boolean(chanceOfGettingTrue: 50), // Random boolean (50% chance)
            'created_at' => $createdAt, // Set created_at time
            'updated_at' => $createdAt, // Set updated_at time to the same as created_at
        ];
    }
}
