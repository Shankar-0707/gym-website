import express from 'express';
const router = express.Router();

// Protected route example
router.get('/dashboard', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to dashboard',
    data: {
      workouts: ['Chest Day', 'Leg Day', 'Back Day'],
      stats: {
        workoutsThisWeek: 4,
        caloriesBurned: 1200,
        membership: 'Premium'
      }
    }
  });
});

export default router;