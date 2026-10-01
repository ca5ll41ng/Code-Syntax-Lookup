---
id: "java-en-function-java-util-concurrent-linkedtransferqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.LinkedTransferQueue"
title: "LinkedTransferQueue"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedTransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedTransferQueue

An unbounded `TransferQueue` based on linked nodes.
 This queue orders elements FIFO (first-in-first-out) with respect
 to any given producer.  The head of the queue is that
 element that has been on the queue the longest time for some
 producer.  The tail of the queue is that element that has
 been on the queue the shortest time for some producer.

 

Beware that, unlike in most collections, the `size` method
 is NOT a constant-time operation. Because of the
 asynchronous nature of these queues, determining the current number
 of elements requires a traversal of the elements, and so may report
 inaccurate results if this collection is modified during traversal.

 

Bulk operations that add, remove, or examine multiple elements,
 such as `addAll`, `removeIf` or `forEach`,
 are not guaranteed to be performed atomically.
 For example, a `forEach` traversal concurrent with an `addAll` operation might observe only some of the added elements.

 

This class and its iterator implement all of the optional
 methods of the `Collection` and `Iterator` interfaces.

 

Memory consistency effects: As with other concurrent
 collections, actions in a thread prior to placing an object into a
 `LinkedTransferQueue`
 happen-before
 actions subsequent to the access or removal of that element from
 the `LinkedTransferQueue` in another thread.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.7*
