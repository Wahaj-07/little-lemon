import React, { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!date) {
      newErrors.date = 'Please select a date.';
    }
    if (!time) {
      newErrors.time = 'Please select a time.';
    }
    if (!guests || guests < 1 || guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Booking confirmed for ${guests} guest(s) on ${date} at ${time}. Occasion: ${occasion}`);
    }
  };

  return (
    <section id="booking">
      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-describedby="date-error"
            aria-invalid={!!errors.date}
          />
          {errors.date && (
            <span id="date-error" role="alert" className="error-message">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-describedby="time-error"
            aria-invalid={!!errors.time}
          >
            <option value="">-- Select a time --</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
          {errors.time && (
            <span id="time-error" role="alert" className="error-message">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            aria-describedby="guests-error"
            aria-invalid={!!errors.guests}
          />
          {errors.guests && (
            <span id="guests-error" role="alert" className="error-message">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Make Your Reservation</button>
      </form>
    </section>
  );
}

export default BookingForm;