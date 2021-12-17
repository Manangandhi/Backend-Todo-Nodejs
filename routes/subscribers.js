// const express = require("express");
// const router = express.Router();
// const Subscriber = require("../models/subscriber");

// const getSubscriber = async (req, res, next) => {
//   let subscriber;
//   try {
//     subscriber = await Subscriber.findById(req.params.id);
//     if (subscriber == null) {
//       return res.status(404).json({ message: "Cannot find subscriber" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.subscriber = subscriber;
//   next();
// };

// // Getting all
// router.get("/", async (req, res) => {
//   try {
//     const subscribers = await Subscriber.find();
//     res.send(subscribers);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });

// // Getting one
// router.get("/:id", getSubscriber, (req, res) => {
//   res.send(res.subscriber);
// });

// // Creating One
// router.post("/", async (req, res) => {
//   const subscriber = new Subscriber({
//     name: req.body.name,
//     subscribeToChannel: req.body.subscribeToChannel,
//   });
//   try {
//     const newSubscriber = await subscriber.save();
//     res.status(201).json(newSubscriber);
//   } catch (e) {
//     res.status(400).json({ message: e.message });
//   }
// });

// // Updating One
// router.patch("/:id", getSubscriber, async (req, res) => {
//   if (req.body.name != null) {
//     res.subscriber.name = req.body.name;
//   }
//   if (req.body.subscribeToChannel != null) {
//     res.subscriber.subscribeToChannel = req.body.subscribeToChannel;
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save();
//     res.json(updatedSubscriber);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Deleting one
// router.delete("/:id", getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove();
//     res.json({ message: "Deleted Subscriber" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
