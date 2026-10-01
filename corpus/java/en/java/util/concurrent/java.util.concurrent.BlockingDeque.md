---
id: "java-en-function-java-util-concurrent-blockingdeque"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.BlockingDeque"
title: "BlockingDeque"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque

A `Deque` that additionally supports blocking operations that wait
 for the deque to become non-empty when retrieving an element, and wait for
 space to become available in the deque when storing an element.

 

`BlockingDeque` methods come in four forms, with different ways
 of handling operations that cannot be satisfied immediately, but may be
 satisfied at some point in the future:
 one throws an exception, the second returns a special value (either
 `null` or `false`, depending on the operation), the third
 blocks the current thread indefinitely until the operation can succeed,
 and the fourth blocks for only a given maximum time limit before giving
 up.  These methods are summarized in the following table:

 
 Summary of BlockingDeque methods
  
     First Element (Head)
  
  
    
    Throws exception
    Special value
    Blocks
    Times out
  
  
    Insert
    `addFirst`
    `offerFirst`
    `putFirst`
    `offerFirst`
  
  
    Remove
    `removeFirst`
    `pollFirst`
    `takeFirst`
    `pollFirst`
  
  
    Examine
    `getFirst`
    `peekFirst`
    not applicable
    not applicable
  
  
     Last Element (Tail)
  
  
    
    Throws exception
    Special value
    Blocks
    Times out
  
  
    Insert
    `addLast`
    `offerLast`
    `putLast`
    `offerLast`
  
  
    Remove
    `removeLast`
    `pollLast`
    `takeLast`
    `pollLast`
  
  
    Examine
    `getLast`
    `peekLast`
    not applicable
    not applicable
  
 

 

Like any `BlockingQueue`, a `BlockingDeque` is thread safe,
 does not permit null elements, and may (or may not) be
 capacity-constrained.

 

A `BlockingDeque` implementation may be used directly as a FIFO
 `BlockingQueue`. The methods inherited from the
 `BlockingQueue` interface are precisely equivalent to
 `BlockingDeque` methods as indicated in the following table:

 
 Comparison of BlockingQueue and BlockingDeque methods
  
    
     `BlockingQueue` Method
     Equivalent `BlockingDeque` Method
  
  
    Insert
    `add`
    `addLast`
  
  
    `offer`
    `offerLast`
  
  
    `put`
    `putLast`
  
  
    `offer`
    `offerLast`
  
  
    Remove
    `remove`
    `removeFirst`
  
  
    `poll`
    `pollFirst`
  
  
    `take`
    `takeFirst`
  
  
    `poll`
    `pollFirst`
  
  
    Examine
    `element`
    `getFirst`
  
  
    `peek`
    `peekFirst`
  
 

 

Memory consistency effects: As with other concurrent
 collections, actions in a thread prior to placing an object into a
 `BlockingDeque`
 happen-before
 actions subsequent to the access or removal of that element from
 the `BlockingDeque` in another thread.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this deque

> *Since 1.6*
