---
id: "java-en-function-linkedtransferqueue-size"
language: "java"
lang: "en"
category: "function"
name: "LinkedTransferQueue.size"
signature: "public int size()"
title: "LinkedTransferQueue.size"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedTransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedTransferQueue.size

```java
public int size()
```

Returns the number of elements in this queue.  If this queue
 contains more than `Integer.MAX_VALUE` elements, returns
 `Integer.MAX_VALUE`.

 

Beware that, unlike in most collections, this method is
 NOT a constant-time operation. Because of the
 asynchronous nature of these queues, determining the current
 number of elements requires an O(n) traversal.

**返回**

- the number of elements in this queue
