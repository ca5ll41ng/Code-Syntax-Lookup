---
id: "java-en-function-selectionkey-interestops"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.interestOps"
signature: "public abstract int interestOps()"
title: "SelectionKey.interestOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.interestOps

```java
public abstract int interestOps()
```

Retrieves this key's interest set.

 

 It is guaranteed that the returned set will only contain operation
 bits that are valid for this key's channel.

**返回**

- This key's interest set

**异常**

- **CancelledKeyException** — If this key has been cancelled
