const invoices = [
  {
    _id: "189547",
    item: "Amazon Product",
    qty: 10,
    date: new Date(2023, 5, 19, 20, 10, 5),
  },
  {
    _id: "884563",
    item: "Google Product",
    qty: 10,
    date: new Date(2023, 4, 9, 23, 1, 40),
  },
  {
    _id: "445216",
    item: "Linked Product",
    qty: 10,
    date: new Date(2023, 5, 11, 7, 30, 51),
  },
];

export default {
  findAll(req, res, next) {
    res.json(invoices);
  },
};
