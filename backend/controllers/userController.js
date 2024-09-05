const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
    // console.log(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const findUsersByHome = async (req, res) => {
  const { homeId } = req.query;

  try {
    const home = await prisma.home.findUnique({
      where: {
        id: parseInt(homeId),
      },
    });

    //find users having the same homeId from users_homes table
    const users_homes = await prisma.users_homes.findMany({
      where: {
        home_id: parseInt(homeId),
      },
      include: {
        user: true,
      },
    });
    res.json({ home, users_homes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findAllUsers,
  findUsersByHome,
};
