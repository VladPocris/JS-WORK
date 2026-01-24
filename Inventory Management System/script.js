let inventory = []

function findProductIndex(name) {
  return inventory.findIndex(element => element.name.toLowerCase() === name.toLowerCase());
}

function addProduct(newProduct) {
  newProduct.name = newProduct.name.toLowerCase();
  const index = inventory.findIndex(product => product.name === newProduct.name);

  if(index != -1) {
    inventory[index].quantity += newProduct.quantity;
    console.log(`${inventory[index].name} quantity updated`);
  } else {
    inventory.push(newProduct);
    console.log(`${newProduct.name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  name = name.toLowerCase();
  const index = inventory.findIndex(product => product.name === name);

  if(index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if(quantity > inventory[index].quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }

  if(quantity === inventory[index].quantity) {
    inventory.splice(index, 1);
    return;
  }

  inventory[index].quantity -= quantity;
  console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
}



findProductIndex("biscuits");
addProduct({name: "biscuits", quantity: 15});
removeProduct("biscuits", 35);
removeProduct("FLOUR", 5);
removeProduct("biscuits", 15);
console.log(inventory);