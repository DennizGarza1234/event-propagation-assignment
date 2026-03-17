function NestedButtons() {

  function handleOuterClick() {
    alert("Outer container clicked!");
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert("Inner button clicked!");
  }

  return (
    <div
      onClick={handleOuterClick}
      style={{
        padding: "50px",
        backgroundColor: "#ccc",
        textAlign: "center"
      }}
    >
      <h2>Outer Container</h2>

      <button onClick={handleInnerClick}>
        Inner Button
      </button>
    </div>
  );
}

export default NestedButtons;