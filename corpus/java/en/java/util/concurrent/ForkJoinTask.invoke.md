---
id: "java-en-function-forkjointask-invoke"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.invoke"
signature: "public final V invoke()"
title: "ForkJoinTask.invoke"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.invoke

```java
public final V invoke()
```

Commences performing this task, awaits its completion if
 necessary, and returns its result, or throws an (unchecked)
 `RuntimeException` or `Error` if the underlying
 computation did so.

**返回**

- the computed result
