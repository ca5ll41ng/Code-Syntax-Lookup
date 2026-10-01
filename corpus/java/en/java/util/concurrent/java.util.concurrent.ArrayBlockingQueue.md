---
id: "java-en-function-java-util-concurrent-arrayblockingqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ArrayBlockingQueue"
title: "ArrayBlockingQueue"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue

A bounded `BlockingQueue blocking queue` backed by an
 array.  This queue orders elements FIFO (first-in-first-out).  The
 head of the queue is that element that has been on the
 queue the longest time.  The tail of the queue is that
 element that has been on the queue the shortest time. New elements
 are inserted at the tail of the queue, and the queue retrieval
 operations obtain elements at the head of the queue.

 

This is a classic &quot;bounded buffer&quot;, in which a
 fixed-sized array holds elements inserted by producers and
 extracted by consumers.  Once created, the capacity cannot be
 changed.  Attempts to `put` an element into a full queue
 will result in the operation blocking; attempts to `take` an
 element from an empty queue will similarly block.

 

This class supports an optional fairness policy for ordering
 waiting producer and consumer threads.  By default, this ordering
 is not guaranteed. However, a queue constructed with fairness set
 to `true` grants threads access in FIFO order. Fairness
 generally decreases throughput but reduces variability and avoids
 starvation.

 

This class and its iterator implement all of the optional
 methods of the `Collection` and `Iterator` interfaces.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.5*
