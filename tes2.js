function createTree(data, container) {
    const ulElement = document.createElement("ul");
  
    for (let key in data) {
      const liElement = document.createElement("li");
      liElement.textContent = key;
  
      if (Object.keys(data[key]).length > 0) {
        // Recursively create nested ul/li for child objects
        createTree(data[key], liElement);
      }
  
      ulElement.appendChild(liElement);
    }
  
    container.appendChild(ulElement);
  }
  
  // Example data
  let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };
  
  // Create the tree structure in the container element (e.g., a div with id "treeContainer")
  const containerElement = document.getElementById("treeContainer");
  
  // Call the createTree function
  createTree(data, containerElement);
  