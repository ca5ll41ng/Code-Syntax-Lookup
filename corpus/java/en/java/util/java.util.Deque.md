---
id: "java-en-function-java-util-deque"
language: "java"
lang: "en"
category: "function"
name: "java.util.Deque"
title: "Deque"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque

A linear collection that supports element insertion and removal at
 both ends.  The name deque is short for "double ended queue"
 and is usually pronounced "deck".  Most `Deque`
 implementations place no fixed limits on the number of elements
 they may contain, but this interface supports capacity-restricted
 deques as well as those with no fixed size limit.

 

This interface defines methods to access the elements at both
 ends of the deque.  Methods are provided to insert, remove, and
 examine the element.  Each of these methods exists in two forms:
 one throws an exception if the operation fails, the other returns a
 special value (either `null` or `false`, depending on
 the operation).  The latter form of the insert operation is
 designed specifically for use with capacity-restricted
 `Deque` implementations; in most implementations, insert
 operations cannot fail.

 

The twelve methods described above are summarized in the
 following table:

 
 Summary of Deque methods
  
  
    
     First Element (Head)
     Last Element (Tail)
  
  
    Throws exception
    Special value
    Throws exception
    Special value
  
  
  
  
    Insert
    `addFirst`
    `offerFirst`
    `addLast`
    `offerLast`
  
  
    Remove
    `removeFirst`
    `pollFirst`
    `removeLast`
    `pollLast`
  
  
    Examine
    `getFirst`
    `peekFirst`
    `getLast`
    `peekLast`
  
  
 

 

This interface extends the `Queue` interface.  When a deque is
 used as a queue, FIFO (First-In-First-Out) behavior results.  Elements are
 added at the end of the deque and removed from the beginning.  The methods
 inherited from the `Queue` interface are precisely equivalent to
 `Deque` methods as indicated in the following table:

 
 Comparison of Queue and Deque methods
  
  
     `Queue` Method
     Equivalent `Deque` Method
  
  
  
  
    `add`
    `addLast`
  
  
    `offer`
    `offerLast`
  
  
    `remove`
    `removeFirst`
  
  
    `poll`
    `pollFirst`
  
  
    `element`
    `getFirst`
  
  
    `peek`
    `peekFirst`
  
  
 

 

Deques can also be used as LIFO (Last-In-First-Out) stacks.  This
 interface should be used in preference to the legacy `Stack` class.
 When a deque is used as a stack, elements are pushed and popped from the
 beginning of the deque.  Stack methods are equivalent to `Deque`
 methods as indicated in the table below:

 
 Comparison of Stack and Deque methods
  
  
     Stack Method
     Equivalent `Deque` Method
  
  
  
  
    `push`
    `addFirst`
  
  
    `pop`
    `removeFirst`
  
  
    `peek`
    `peekFirst`
  
  
 

 

Note that the `peek peek` method works equally well when
 a deque is used as a queue or a stack; in either case, elements are
 drawn from the beginning of the deque.

 

This interface provides two methods to remove interior
 elements, `removeFirstOccurrence removeFirstOccurrence` and
 `removeLastOccurrence removeLastOccurrence`.

 

Unlike the `List` interface, this interface does not
 provide support for indexed access to elements.

 

While `Deque` implementations are not strictly required
 to prohibit the insertion of null elements, they are strongly
 encouraged to do so.  Users of any `Deque` implementations
 that do allow null elements are strongly encouraged not to
 take advantage of the ability to insert nulls.  This is so because
 `null` is used as a special return value by various methods
 to indicate that the deque is empty.

 

`Deque` implementations generally do not define
 element-based versions of the `equals` and `hashCode`
 methods, but instead inherit the identity-based versions from class
 `Object`.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this deque

> *Since 1.6*
