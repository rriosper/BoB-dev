db.createUser({
  user: "bob-user",
  pwd: "bob-password",
  roles: [
    {
      role: "readWrite",
      db: "bob-dev",
    },
  ],
});

db = db.getSiblingDB("bob-dev");
db.createCollection({ name: "passengers" });

db.passengers.insertMany([
  {
    name: "Roberto Ríos",
    bags: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  {
    name: "Juan Perez",
    bags: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
]);
