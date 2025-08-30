type TestPageProps = {
  firstname: string;
  lastname: string;
};

const TestPage = (props: TestPageProps) => {
  return (
    <>
      <div style={{ paddingTop: "5rem" }}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "#08FF83",
            color: "#000000",
            fontWeight: "bold",
            fontSize: "6rem",
          }}
        >
          Pass
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "5rem",
          }}
        >
          Or
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "#F73030",
            color: "#000000",
            fontWeight: "bold",
            fontSize: "6rem",
          }}
        >
          Smash
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            position: "fixed",
            bottom: "0",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          <button
            style={{
              backgroundColor: "#1059A2",
              color: "#FFFFFF",
              padding: "14px 20px",
              margin: "8px 0",
              border: "none",
              cursor: "pointer",
              width: "100%",
              borderRadius: "5px",
              fontSize: "2rem",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default TestPage;
