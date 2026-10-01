---
id: "java-en-function-arrayblockingqueue-remainingcapacity"
language: "java"
lang: "en"
category: "function"
name: "ArrayBlockingQueue.remainingCapacity"
signature: "public int remainingCapacity()"
title: "ArrayBlockingQueue.remainingCapacity"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue.remainingCapacity

```java
public int remainingCapacity()
```

Returns the number of additional elements that this queue can ideally
 (in the absence of memory or resource constraints) accept without
 blocking. This is always equal to the initial capacity of this queue
 less the current `size` of this queue.

 

Note that you cannot always tell if an attempt to insert
 an element will succeed by inspecting `remainingCapacity`
 because it may be the case that another thread is about to
 insert or remove an element.
