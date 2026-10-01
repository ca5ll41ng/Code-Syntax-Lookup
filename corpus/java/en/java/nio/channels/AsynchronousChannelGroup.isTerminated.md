---
id: "java-en-function-asynchronouschannelgroup-isterminated"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.isTerminated"
signature: "public abstract boolean isTerminated()"
title: "AsynchronousChannelGroup.isTerminated"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.isTerminated

```java
public abstract boolean isTerminated()
```

Tells whether or not this group has terminated.

 

 Where this method returns `true`, then the associated thread
 pool has also `isTerminated terminated`.

**返回**

- `true` if this group has terminated
