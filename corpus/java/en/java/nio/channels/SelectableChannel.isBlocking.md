---
id: "java-en-function-selectablechannel-isblocking"
language: "java"
lang: "en"
category: "function"
name: "SelectableChannel.isBlocking"
signature: "public abstract boolean isBlocking()"
title: "SelectableChannel.isBlocking"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectableChannel.isBlocking

```java
public abstract boolean isBlocking()
```

Tells whether or not every I/O operation on this channel will block
 until it completes.  A newly-created channel is always in blocking mode.

 

 If this channel is closed then the value returned by this method is
 not specified.

**返回**

- `true` if, and only if, this channel is in blocking mode
