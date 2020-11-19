// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false

var isPalindrome = function(head) {
    let fast = head
    let slow = head

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    fast = head
    slow = reverse(slow)

    while(slow !== null){
        if(slow.val !== fast.val){
            return false
        }

        slow = slow.next
        fast = fast.next
    }

    return true
};

let reverse = function(head){
    let prev = null

    while(head!==null){
        let nextNode = head.next
        head.next = prev
        prev = head
        head = nextNode
    }
    return prev
}

----

var isPalindrome = function(head) {
  const arr = [];
  while(head && head.val !== null) {
      arr.push(head.val);
      head = head.next;
  }
  return arr.every((e, i) => e === arr[arr.length - i - 1]);
};
