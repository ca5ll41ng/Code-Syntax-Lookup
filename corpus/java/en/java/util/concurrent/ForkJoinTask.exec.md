---
id: "java-en-function-forkjointask-exec"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.exec"
signature: "protected abstract boolean exec()"
title: "ForkJoinTask.exec"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.exec

```java
protected abstract boolean exec()
```

Immediately performs the base action of this task and returns
 true if, upon return from this method, this task is guaranteed
 to have completed. This method may return false otherwise, to
 indicate that this task is not necessarily complete (or is not
 known to be complete), for example in asynchronous actions that
 require explicit invocations of completion methods. This method
 may also throw an (unchecked) exception to indicate abnormal
 exit. This method is designed to support extensions, and should
 not in general be called otherwise.

**返回**

- `true` if this task is known to have completed normally
