import Notificaion from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    /**
     * Check if logged in user is a valid provider.
     */
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider)
      return res
        .status(401)
        .json({ error: 'Only providers can list notifications.' });

    const notifications = await Notificaion.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notificaion.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
