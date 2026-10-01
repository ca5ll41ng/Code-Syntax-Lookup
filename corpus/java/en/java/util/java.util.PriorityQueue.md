---
id: "java-en-function-java-util-priorityqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.PriorityQueue"
title: "PriorityQueue"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PriorityQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityQueue

An unbounded priority `Queue queue` based on a priority heap.
 The elements of the priority queue are ordered according to their
 `Comparable natural ordering`, or by a `Comparator`
 provided at queue construction time, depending on which constructor is
 used.  A priority queue does not permit `null` elements.
 A priority queue relying on natural ordering also does not permit
 insertion of non-comparable objects (doing so may result in
 `ClassCastException`).

 

The head of this queue is the least element
 with respect to the specified ordering.  If multiple elements are
 tied for least value, the head is one of those elements -- ties are
 broken arbitrarily.  The queue retrieval operations `poll`,
 `remove`, `peek`, and `element` access the
 element at the head of the queue.

 

A priority queue is unbounded, but has an internal
 capacity governing the size of an array used to store the
 elements on the queue.  It is always at least as large as the queue
 size.  As elements are added to a priority queue, its capacity
 grows automatically.  The details of the growth policy are not
 specified.

 

This class and its iterator implement all of the
 optional methods of the `Collection` and `Iterator` interfaces.  The Iterator provided in method `iterator` and the Spliterator provided in method `spliterator`
 are not guaranteed to traverse the elements of
 the priority queue in any particular order. If you need ordered
 traversal, consider using `Arrays.sort(pq.toArray())`.

 

**Note that this implementation is not synchronized.**
 Multiple threads should not access a `PriorityQueue`
 instance concurrently if any of the threads modifies the queue.
 Instead, use the thread-safe `java.util.concurrent.PriorityBlockingQueue` class.

 

Implementation note: this implementation provides
 O(log(n)) time for the enqueuing and dequeuing methods
 (`offer`, `poll`, `remove()` and `add`);
 linear time for the `remove(Object)` and `contains(Object)`
 methods; and constant time for the retrieval methods
 (`peek`, `element`, and `size`).

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.5*
