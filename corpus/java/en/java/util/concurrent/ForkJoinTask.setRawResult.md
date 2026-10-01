---
id: "java-en-function-forkjointask-setrawresult"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.setRawResult"
signature: "protected abstract void setRawResult(V value)"
title: "ForkJoinTask.setRawResult"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.setRawResult

```java
protected abstract void setRawResult(V value)
```

Forces the given value to be returned as a result.  This method
 is designed to support extensions, and should not in general be
 called otherwise.

**参数**

- **value** — the value
