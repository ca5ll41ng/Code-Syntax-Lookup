---
id: "java-en-function-abstractqueuedlongsynchronizer-tostring"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.toString"
signature: "public String toString()"
title: "AbstractQueuedLongSynchronizer.toString"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.toString

```java
public String toString()
```

Returns a string identifying this synchronizer, as well as its state.
 The state, in brackets, includes the String `"State ="`
 followed by the current value of `getState`, and either
 `"nonempty"` or `"empty"` depending on whether the
 queue is empty.

**返回**

- a string identifying this synchronizer, as well as its state
