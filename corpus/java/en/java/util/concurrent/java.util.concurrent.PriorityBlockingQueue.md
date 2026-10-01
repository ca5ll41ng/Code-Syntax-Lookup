---
id: "java-en-function-java-util-concurrent-priorityblockingqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.PriorityBlockingQueue"
title: "PriorityBlockingQueue"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/PriorityBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityBlockingQueue

An unbounded `BlockingQueue blocking queue` that uses
 the same ordering rules as class `PriorityQueue` and supplies
 blocking retrieval operations.  While this queue is logically
 unbounded, attempted additions may fail due to resource exhaustion
 (causing `OutOfMemoryError`). This class does not permit
 `null` elements.  A priority queue relying on `Comparable natural ordering` also does not permit insertion of
 non-comparable objects (doing so results in
 `ClassCastException`).

 

This class and its iterator implement all of the optional
 methods of the `Collection` and `Iterator` interfaces.
 The Iterator provided in method `iterator` and the
 Spliterator provided in method `spliterator` are not
 guaranteed to traverse the elements of the PriorityBlockingQueue in
 any particular order. If you need ordered traversal, consider using
 `Arrays.sort(pq.toArray())`.  Also, method `drainTo` can
 be used to remove some or all elements in priority order and
 place them in another collection.

 

Operations on this class make no guarantees about the ordering
 of elements with equal priority. If you need to enforce an
 ordering, you can define custom classes or comparators that use a
 secondary key to break ties in primary priority values.  For
 example, here is a class that applies first-in-first-out
 tie-breaking to comparable elements. To use it, you would insert a
 `new FIFOEntry(anEntry)` instead of a plain entry object.

 
```
 `class FIFOEntry>
     implements Comparable> {
   static final AtomicLong seq = new AtomicLong();
   final long seqNum;
   final E entry;
   public FIFOEntry(E entry) {
     seqNum = seq.getAndIncrement();
     this.entry = entry;
   `
   public E getEntry() { return entry; }
   public int compareTo(FIFOEntry other) {
     int res = entry.compareTo(other.entry);
     if (res == 0 && other.entry != this.entry)
       res = (seqNum < other.seqNum ? -1 : 1);
     return res;
   }
 }}
```

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.5*
