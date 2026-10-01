---
id: "java-en-function-forkjoinpool-pollsubmission"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.pollSubmission"
signature: "protected ForkJoinTask<?> pollSubmission()"
title: "ForkJoinPool.pollSubmission"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.pollSubmission

```java
protected ForkJoinTask<?> pollSubmission()
```

Removes and returns the next unexecuted submission if one is
 available.  This method may be useful in extensions to this
 class that re-assign work in systems with multiple pools.

**返回**

- the next submission, or `null` if none
