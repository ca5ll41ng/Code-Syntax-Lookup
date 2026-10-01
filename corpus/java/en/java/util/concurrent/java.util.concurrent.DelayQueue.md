---
id: "java-en-function-java-util-concurrent-delayqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.DelayQueue"
title: "DelayQueue"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayQueue

An unbounded `BlockingQueue blocking queue` of `Delayed`
 elements, in which an element generally becomes eligible for removal when its
 delay has expired.

 

An element is considered expired when its
 `getDelay(TimeUnit.NANOSECONDS)` method would return a value less than
 or equal to zero.

 

An element is considered the head of the queue if it
 is the element with the earliest expiration time, whether in the past or the
 future, if there is such an element.

 

An element is considered the expired head of
 the queue if it is the expired element with the earliest expiration
 time in the past, if there is such an element.
 The expired head, when present, is also the head.

 

While this class implements the `BlockingQueue` interface, it
 intentionally violates the general contract of `BlockingQueue`, in that
 the following methods disregard the presence of unexpired elements and only
 ever remove the expired head:

 
 
-  `poll`
 
-  `poll`
 
-  `take`
 
-  `remove`
 

 

All other methods operate on both expired and unexpired elements.
 For example, the `size` method returns the count of all elements.
 Method `peek` may return the (non-null) head even when
 `take()` would block waiting for that element to expire.

 

This queue does not permit null elements.

 

This class and its iterator implement all of the optional
 methods of the `Collection` and `Iterator` interfaces.
 The Iterator provided in method `iterator` is not
 guaranteed to traverse the elements of the DelayQueue in any
 particular order.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.5*
