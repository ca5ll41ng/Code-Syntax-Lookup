---
id: "java-en-function-forkjointask-tryunfork"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.tryUnfork"
signature: "public boolean tryUnfork()"
title: "ForkJoinTask.tryUnfork"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.tryUnfork

```java
public boolean tryUnfork()
```

Tries to unschedule this task for execution. This method will
 typically (but is not guaranteed to) succeed if this task is
 the most recently forked task by the current thread, and has
 not commenced executing in another thread.  This method may be
 useful when arranging alternative local processing of tasks
 that could have been, but were not, stolen.

**返回**

- `true` if unforked
