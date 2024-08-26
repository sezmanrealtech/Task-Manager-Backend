// A miidleware in backend development is like a middleman that sits between the incoming request from client and the final response from the server. its a function that can modify the request , process it, handle certain task before passng it on to the next part of the code or sending it back

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
