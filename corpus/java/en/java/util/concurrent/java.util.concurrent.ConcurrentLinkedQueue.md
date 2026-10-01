---
id: "java-en-function-java-util-concurrent-concurrentlinkedqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ConcurrentLinkedQueue"
title: "ConcurrentLinkedQueue"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedQueue

An unbounded thread-safe `Queue queue` based on linked nodes.
 This queue orders elements FIFO (first-in-first-out).
 The head of the queue is that element that has been on the
 queue the longest time.
 The tail of the queue is that element that has been on the
 queue the shortest time. New elements
 are inserted at the tail of the queue, and the queue retrieval
 operations obtain elements at the head of the queue.
 A `ConcurrentLinkedQueue` is an appropriate choice when
 many threads will share access to a common collection.
 Like most other concurrent collection implementations, this class
 does not permit the use of `null` elements.

 

This implementation employs an efficient non-blocking
 algorithm based on one described in
 
 Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue
 Algorithms by Maged M. Michael and Michael L. Scott.

 

Iterators are weakly consistent, returning elements
 reflecting the state of the queue at some point at or since the
 creation of the iterator.  They do not throw `java.util.ConcurrentModificationException`, and may proceed concurrently
 with other operations.  Elements contained in the queue since the creation
 of the iterator will be returned exactly once.

 

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
 methods of the `Queue` and `Iterator` interfaces.

 

Memory consistency effects: As with other concurrent
 collections, actions in a thread prior to placing an object into a
 `ConcurrentLinkedQueue`
 happen-before
 actions subsequent to the access or removal of that element from
 the `ConcurrentLinkedQueue` in another thread.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.5*
