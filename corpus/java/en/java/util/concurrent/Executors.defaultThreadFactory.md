---
id: "java-en-function-executors-defaultthreadfactory"
language: "java"
lang: "en"
category: "function"
name: "Executors.defaultThreadFactory"
signature: "public static ThreadFactory defaultThreadFactory()"
title: "Executors.defaultThreadFactory"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.defaultThreadFactory

```java
public static ThreadFactory defaultThreadFactory()
```

Returns a default thread factory used to create new threads.
 This factory creates all new threads used by an Executor in the
 same `ThreadGroup`. It uses the group of the thread
 invoking this `defaultThreadFactory` method. Each new
 thread is created as a non-daemon thread with priority set to
 the smaller of `Thread.NORM_PRIORITY` and the maximum
 priority permitted in the thread group.  New threads have names
 accessible via `getName` of
 pool-N-thread-M, where N is the sequence
 number of this factory, and M is the sequence number
 of the thread created by this factory.

**返回**

- a thread factory
