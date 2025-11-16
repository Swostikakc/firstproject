import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST register
router.post('/', async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password, phone, role: role || 'customer' });
    const savedUser = await user.save();

    const userResponse = savedUser.toObject();
    delete userResponse.password;

    res.status(201).json(userResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update user
router.put('/:id', async (req, res) => {
  try {
    const { password, ...updateData } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (password) user.password = password;

    Object.assign(user, updateData);
    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    res.json(userResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({
      user: userResponse,
      token: 'dummy-token', // Replace with JWT later
      message: 'Login successful'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

