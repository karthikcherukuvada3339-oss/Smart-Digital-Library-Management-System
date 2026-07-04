 const mongoose = require("mongoose");
 funcƟon formatToIndianDate(date = new Date()) {
const d = new Date(date);
const day = String(d.getDate()).padStart(2, "0");
const month = String(d.getMonth() + 1).padStart(2, "0");
const year = d.getFullYear(); return `${day}-${month}-${year}`;
 }
const bookingSchema = new mongoose.Schema({
emailID: { type: String, required: true },
 "Book Name": { type: String, required: true },
Author: { type: String, required: true },
 category: { type: String, required: true },
 bookedAt: { type: String, required: true },
validTill: { type: String, required: true },
 status: { type: String, default: "Booked" },
 });
 bookingSchema.pre("save", funcƟon (next) {
if (this.bookedAt) {
 this.bookedAt = formatToIndianDate(new Date(this.bookedAt));
}
 if (this.validTill) {
this.validTill = formatToIndianDate(new Date(this.validTill));
}
 next();
 });
 const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;