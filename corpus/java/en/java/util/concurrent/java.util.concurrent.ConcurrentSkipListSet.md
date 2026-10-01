---
id: "java-en-function-java-util-concurrent-concurrentskiplistset"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ConcurrentSkipListSet"
title: "ConcurrentSkipListSet"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet

A scalable concurrent `NavigableSet` implementation based on
 a `ConcurrentSkipListMap`.  The elements of the set are kept
 sorted according to their `Comparable natural ordering`,
 or by a `Comparator` provided at set creation time, depending
 on which constructor is used.

 

This implementation provides expected average log(n) time
 cost for the `contains`, `add`, and `remove`
 operations and their variants.  Insertion, removal, and access
 operations safely execute concurrently by multiple threads.

 

Iterators and spliterators are
 weakly consistent.

 

Ascending ordered views and their iterators are faster than
 descending ones.

 

Beware that, unlike in most collections, the `size`
 method is not a constant-time operation. Because of the
 asynchronous nature of these sets, determining the current number
 of elements requires a traversal of the elements, and so may report
 inaccurate results if this collection is modified during traversal.

 

Bulk operations that add, remove, or examine multiple elements,
 such as `addAll`, `removeIf` or `forEach`,
 are not guaranteed to be performed atomically.
 For example, a `forEach` traversal concurrent with an `addAll` operation might observe only some of the added elements.

 

This class and its iterators implement all of the
 optional methods of the `Set` and `Iterator`
 interfaces. Like most other concurrent collection implementations,
 this class does not permit the use of `null` elements,
 because `null` arguments and return values cannot be reliably
 distinguished from the absence of elements.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements maintained by this set

> *Since 1.6*
