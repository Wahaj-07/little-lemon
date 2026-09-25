import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Test 1: Form sahi se render ho raha hai
test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Reserve a Table/i);
  expect(headingElement).toBeInTheDocument();
});

// Test 2: Khaali form submit karne par error messages dikhne chahiye
test('shows validation errors when submitted empty', () => {
  render(<BookingForm />);

  const submitButton = screen.getByText(/Make Your Reservation/i);
  fireEvent.click(submitButton);

  expect(screen.getByText(/Please select a date/i)).toBeInTheDocument();
  expect(screen.getByText(/Please select a time/i)).toBeInTheDocument();
});

// Test 3: Date field mein value type karne par state update honi chahiye
test('updates the date field when user selects a date', () => {
  render(<BookingForm />);

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2026-10-05' } });

  expect(dateInput.value).toBe('2026-10-05');
});

// Test 4: Sahi values bharne ke baad koi error nahi aana chahiye
test('does not show errors when all required fields are filled correctly', () => {
  render(<BookingForm />);

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2026-10-05' },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: '18:00' },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: '2' },
  });

  fireEvent.click(screen.getByText(/Make Your Reservation/i));

  expect(screen.queryByText(/Please select a date/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Please select a time/i)).not.toBeInTheDocument();
});