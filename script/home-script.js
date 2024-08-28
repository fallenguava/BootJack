let items = [
    { name: "Product A", price: 10, stock: 5 },
    { name: "Product B", price: 20, stock: 3 },
    // lagi
  ];
  
  function updateTotalItems() {
    document.getElementById("totalItems").textContent = items.length;
  }
  
  function updateTotalValue() {
    let totalValue = items.reduce((acc, item) => acc + item.price * item.stock, 0);
    document.getElementById("totalValue").textContent = totalValue;
  }
  
  function renderItemList() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    items.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.stock}</td>
        <td><button class="btn btn-danger" onclick="removeItem(${index})">Remove</button></td>
      `;
      itemList.appendChild(row);
    });
  }
  
  // Event listeners
  document.getElementById("addItemForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseInt(document.getElementById("itemPrice").value);
    const itemStock = parseInt(document.getElementById("itemStock").value);
    items.push({ name: itemName, price: itemPrice, stock: itemStock });
    renderItemList();
    updateTotalItems();
    updateTotalValue();
  });
  
  function removeItem(index) {
    items.splice(index, 1);
    renderItemList();
    updateTotalItems();
    updateTotalValue();
  }
  
  // Initial render
  renderItemList();
  updateTotalItems();
  updateTotalValue();