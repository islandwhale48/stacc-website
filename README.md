Page 1: Login/Register Window
Contains student ID and Password input fields.
Two buttons: Login and Register.
On clicking Register, user moves to the next window.

Page 2: Registration Window
Fields:
Full Name
Student id
Email ID
Password
Confirm Password
Button: Send OTP.
When clicked, OTP is "sent" (simulated for now).

Page 3: OTP & Confirmation Window
Input field to Enter OTP.
On submission, show one of the following confirmation messages:
 " Registration complete."
 "Invalid OTP. Please try again."


After successful confirmation, redirect to Login Page. Just a successful login message has to displayed when login button is clicked.

Implement the above features in React. Ensure the password is validated for all rules (minimum length, uppercase, lowercase, digit, and special character). Also, include a check to confirm that the password and confirm password fields match.