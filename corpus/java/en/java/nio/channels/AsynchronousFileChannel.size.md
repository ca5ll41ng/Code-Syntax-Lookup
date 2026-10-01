---
id: "java-en-function-asynchronousfilechannel-size"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.size"
signature: "public abstract long size() throws IOException"
title: "AsynchronousFileChannel.size"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.size

```java
public abstract long size() throws IOException
```

Returns the current size of this channel's file.

**返回**

- The current size of this channel's file, measured in bytes

**异常**

- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
