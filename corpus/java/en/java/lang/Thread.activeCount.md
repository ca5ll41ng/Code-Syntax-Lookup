---
id: "java-en-function-thread-activecount"
language: "java"
lang: "en"
category: "function"
name: "Thread.activeCount"
signature: "public static int activeCount()"
title: "Thread.activeCount"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.activeCount

```java
public static int activeCount()
```

Returns an estimate of the number of `isAlive() live`
 platform threads in the current thread's thread group and its subgroups.
 Virtual threads are not included in the estimate.

 

 The value returned is only an estimate because the number of
 threads may change dynamically while this method traverses internal
 data structures, and might be affected by the presence of certain
 system threads. This method is intended primarily for debugging
 and monitoring purposes.

**返回**

- an estimate of the number of live platform threads in the current thread's thread group and in any other thread group that has the current thread's thread group as an ancestor
