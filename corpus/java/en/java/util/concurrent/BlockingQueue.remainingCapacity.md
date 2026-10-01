---
id: "java-en-function-blockingqueue-remainingcapacity"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.remainingCapacity"
signature: "int remainingCapacity()"
title: "BlockingQueue.remainingCapacity"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.remainingCapacity

```java
int remainingCapacity()
```

Returns the number of additional elements that this queue can ideally
 (in the absence of memory or resource constraints) accept without
 blocking, or `Integer.MAX_VALUE` if there is no intrinsic
 limit.

 

Note that you cannot always tell if an attempt to insert
 an element will succeed by inspecting `remainingCapacity`
 because it may be the case that another thread is about to
 insert or remove an element.

**返回**

- the remaining capacity
