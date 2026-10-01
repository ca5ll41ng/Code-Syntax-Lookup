---
id: "java-en-function-java-util-concurrent-linkedblockingdeque"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.LinkedBlockingDeque"
title: "LinkedBlockingDeque"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedBlockingDeque

An optionally-bounded `BlockingDeque blocking deque` based on
 linked nodes.

 

The optional capacity bound constructor argument serves as a
 way to prevent excessive expansion. The capacity, if unspecified,
 is equal to `MAX_VALUE`.  Linked nodes are
 dynamically created upon each insertion unless this would bring the
 deque above capacity.

 

Most operations run in constant time (ignoring time spent
 blocking).  Exceptions include `remove(Object) remove`,
 `removeFirstOccurrence removeFirstOccurrence`, `removeLastOccurrence removeLastOccurrence`, `contains
 contains`, and the bulk operations, all of which run in linear
 time.

 

This class and its iterator implement all of the optional
 methods of the `Collection` and `Iterator` interfaces.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this deque

> *Since 1.6*
