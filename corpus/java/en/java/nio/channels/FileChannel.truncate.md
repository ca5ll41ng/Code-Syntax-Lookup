---
id: "java-en-function-filechannel-truncate"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.truncate"
signature: "public abstract FileChannel truncate(long size) throws IOException"
title: "FileChannel.truncate"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.truncate

```java
public abstract FileChannel truncate(long size) throws IOException
```

Truncates this channel's file to the given size.

 

 If the given size is less than the file's current size then the file
 is truncated, discarding any bytes beyond the new end of the file.  If
 the given size is greater than or equal to the file's current size then
 the file is not modified.  In either case, if this channel's file
 position is greater than the given size then it is set to that size.

**参数**

- **size** — The new size, a non-negative byte count

**返回**

- This file channel

**异常**

- **NonWritableChannelException** — If this channel was not opened for writing
- **ClosedChannelException** — If this channel is closed
- **IllegalArgumentException** — If the new size is negative
- **IOException** — If some other I/O error occurs
