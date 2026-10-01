---
id: "java-en-function-seekablebytechannel-size"
language: "java"
lang: "en"
category: "function"
name: "SeekableByteChannel.size"
signature: "long size() throws IOException"
title: "SeekableByteChannel.size"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SeekableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SeekableByteChannel.size

```java
long size() throws IOException
```

Returns the current size of entity to which this channel is connected.

**返回**

- The current size, measured in bytes

**异常**

- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
