class Node {
    constructor(value, next_node = null) {
      this.value = value;
      this.next_node = next_node;
    }
  }
  
  class LinkedList {
    // setup head and tail
  
  
    add(number) {
      // your code here
      const newNode = new Node(number);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next_node = newNode;
        this.tail = newNode;
      }
      
    }
  
    get(index) {
      // your code here
      if (index < 0 || !this.head) {
        return null;
      }
  
      let currNode = this.head;
      let currIndex = 0;
  
      while (currNode && currIndex < index) {
        currNode = currNode.next_node;
        currIndex++;
      }
  
      return currNode ? currNode.value : null;
   }
    
  }