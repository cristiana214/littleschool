/* eslint-disable @next/next/no-img-element */
export default function WaitlistEmailTemplate({ email }: { email: string }) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://littleschool.s3.us-west-2.amazonaws.com/logo.png"
          alt="Little School Logo"
          style={{ width: "80px", borderRadius: "50%" }}
        />
        <h2>Welcome to the Waitlist!</h2>
      </div>
      <p>Hello my friend,</p>
      <p>
        Thank you for signing up for the waitlist! We will notify you as soon as
        the feature is available.
      </p>
      <p>
        Best Regards,
        <br />
        Little School
      </p>
    </div>
  );
}
