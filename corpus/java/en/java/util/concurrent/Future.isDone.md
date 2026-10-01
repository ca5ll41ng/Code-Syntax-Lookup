---
id: "java-en-function-future-isdone"
language: "java"
lang: "en"
category: "function"
name: "Future.isDone"
signature: "boolean isDone()"
title: "Future.isDone"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future.isDone

```java
boolean isDone()
```

Returns `true` if this task completed.

 Completion may be due to normal termination, an exception, or
 cancellation -- in all of these cases, this method will return
 `true`.

**返回**

- `true` if this task completed
