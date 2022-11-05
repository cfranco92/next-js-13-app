export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#fff", color: "purple" }}>
        Developed by <a href="https://github.com/cfranco92">@cfranco92</a>
      </marquee>
      {children}
    </div>
  );
}
