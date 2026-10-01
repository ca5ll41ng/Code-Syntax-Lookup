---
id: "java-en-function-linkedtransferqueue-add"
language: "java"
lang: "en"
category: "function"
name: "LinkedTransferQueue.add"
signature: "public boolean add(E e)"
title: "LinkedTransferQueue.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedTransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedTransferQueue.add

```java
public boolean add(E e)
```

Inserts the specified element at the tail of this queue.
 As the queue is unbounded, this method will never throw
 `IllegalStateException` or return `false`.

**返回**

- `true` (as specified by `add`)

**异常**

- **NullPointerException** — if the specified element is null
