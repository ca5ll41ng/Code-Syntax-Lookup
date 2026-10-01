---
id: "java-en-function-thread-yield"
language: "java"
lang: "en"
category: "function"
name: "Thread.yield"
signature: "public static void yield()"
title: "Thread.yield"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.yield

```java
public static void yield()
```

A hint to the scheduler that the current thread is willing to yield
 its current use of a processor. The scheduler is free to ignore this
 hint.

 

 Yield is a heuristic attempt to improve relative progression
 between threads that would otherwise over-utilise a CPU. Its use
 should be combined with detailed profiling and benchmarking to
 ensure that it actually has the desired effect.

 

 It is rarely appropriate to use this method. It may be useful
 for debugging or testing purposes, where it may help to reproduce
 bugs due to race conditions. It may also be useful when designing
 concurrency control constructs such as the ones in the
 `java.util.concurrent.locks` package.
