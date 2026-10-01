---
id: "java-en-function-synchronousqueue-containsall"
language: "java"
lang: "en"
category: "function"
name: "SynchronousQueue.containsAll"
signature: "public boolean containsAll(Collection<?> c)"
title: "SynchronousQueue.containsAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SynchronousQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronousQueue.containsAll

```java
public boolean containsAll(Collection<?> c)
```

Returns `false` unless the given collection is empty.
 A `SynchronousQueue` has no internal capacity.

**参数**

- **c** — the collection

**返回**

- `false` unless given collection is empty
