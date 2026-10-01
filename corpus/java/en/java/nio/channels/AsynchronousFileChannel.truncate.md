---
id: "java-en-function-asynchronousfilechannel-truncate"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.truncate"
signature: "public abstract AsynchronousFileChannel truncate(long size) throws IOException"
title: "AsynchronousFileChannel.truncate"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.truncate

```java
public abstract AsynchronousFileChannel truncate(long size) throws IOException
```

Truncates this channel's file to the given size.

 

 If the given size is less than the file's current size then the file
 is truncated, discarding any bytes beyond the new end of the file.  If
 the given size is greater than or equal to the file's current size then
 the file is not modified.

**参数**

- **size** — The new size, a non-negative byte count

**返回**

- This file channel

**异常**

- **NonWritableChannelException** — If this channel was not opened for writing
- **ClosedChannelException** — If this channel is closed
- **IllegalArgumentException** — If the new size is negative
- **IOException** — If some other I/O error occurs
