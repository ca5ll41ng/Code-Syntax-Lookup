---
id: "java-en-function-future-state"
language: "java"
lang: "en"
category: "function"
name: "Future.state"
signature: "default State state()"
title: "Future.state"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future.state

```java
default State state()
```

{@return the computation state}

 The default implementation uses `isDone()`, `isCancelled()`,
 and `get()` to determine the state.

> *Since 19*
