---
id: "java-en-function-selectablechannel-blockinglock"
language: "java"
lang: "en"
category: "function"
name: "SelectableChannel.blockingLock"
signature: "public abstract Object blockingLock()"
title: "SelectableChannel.blockingLock"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectableChannel.blockingLock

```java
public abstract Object blockingLock()
```

Retrieves the object upon which the `configureBlocking
 configureBlocking` and `register register` methods synchronize.
 This is often useful in the implementation of adaptors that require a
 specific blocking mode to be maintained for a short period of time.

**返回**

- The blocking-mode lock object
