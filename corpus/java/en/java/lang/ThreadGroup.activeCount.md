---
id: "java-en-function-threadgroup-activecount"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.activeCount"
signature: "public int activeCount()"
title: "ThreadGroup.activeCount"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.activeCount

```java
public int activeCount()
```

Returns an estimate of the number of `isAlive() live`
 platform threads in this thread group and its subgroups. Virtual threads
 are not included in the estimate. This method recursively iterates over
 all subgroups in this thread group.

 

 The value returned is only an estimate because the number of
 threads may change dynamically while this method traverses internal
 data structures, and might be affected by the presence of certain
 system threads. This method is intended primarily for debugging
 and monitoring purposes.

**返回**

- an estimate of the number of live threads in this thread group and in any other thread group that has this thread group as an ancestor
