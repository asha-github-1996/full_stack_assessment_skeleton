const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// find homes by user
const findHomesByUser = async (req, res) => {
  const { userId } = req.query;

  try {
    const users_homes = await prisma.users_homes.findMany({
      where: {
        user_id: parseInt(userId),
      },
      include: {
        home: true,
      },
    });

    res.json(users_homes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHomeUsers = async (req, res) => {
  const { homeId, userIds } = req.body;

  try {
    // Remove existing associations
    await prisma.users_homes.deleteMany({
      where: {
        home_id: parseInt(homeId),
      },
    });

    // Add new associations
    const newAssociations = userIds.map((userId) => ({
      user_id: parseInt(userId),
      home_id: parseInt(homeId),
    }));

    await prisma.users_homes.createMany({
      data: newAssociations,
    });

    res.json({ message: "Home users updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findHomesByUser,
  updateHomeUsers,
};
