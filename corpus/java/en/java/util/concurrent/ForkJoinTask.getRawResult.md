---
id: "java-en-function-forkjointask-getrawresult"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.getRawResult"
signature: "public abstract V getRawResult()"
title: "ForkJoinTask.getRawResult"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.getRawResult

```java
public abstract V getRawResult()
```

Returns the result that would be returned by `join`, even
 if this task completed abnormally, or `null` if this task
 is not known to have been completed.  This method is designed
 to aid debugging, as well as to support extensions. Its use in
 any other context is discouraged.

**返回**

- the result, or `null` if not completed
