---
id: "java-en-function-java-util-concurrent-concurrentlinkeddeque"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ConcurrentLinkedDeque"
title: "ConcurrentLinkedDeque"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque

An unbounded concurrent `Deque deque` based on linked nodes.
 Concurrent insertion, removal, and access operations execute safely
 across multiple threads.
 A `ConcurrentLinkedDeque` is an appropriate choice when
 many threads will share access to a common collection.
 Like most other concurrent collection implementations, this class
 does not permit the use of `null` elements.

 

Iterators and spliterators are
 weakly consistent.

 

Beware that, unlike in most collections, the `size` method
 is NOT a constant-time operation. Because of the
 asynchronous nature of these deques, determining the current number
 of elements requires a traversal of the elements, and so may report
 inaccurate results if this collection is modified during traversal.

 

Bulk operations that add, remove, or examine multiple elements,
 such as `addAll`, `removeIf` or `forEach`,
 are not guaranteed to be performed atomically.
 For example, a `forEach` traversal concurrent with an `addAll` operation might observe only some of the added elements.

 

This class and its iterator implement all of the optional
 methods of the `Deque` and `Iterator` interfaces.

 

Memory consistency effects: As with other concurrent collections,
 actions in a thread prior to placing an object into a
 `ConcurrentLinkedDeque`
 happen-before
 actions subsequent to the access or removal of that element from
 the `ConcurrentLinkedDeque` in another thread.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this deque

> *Since 1.7*
