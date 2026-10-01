---
id: "java-en-function-seekablebytechannel-truncate"
language: "java"
lang: "en"
category: "function"
name: "SeekableByteChannel.truncate"
signature: "SeekableByteChannel truncate(long size) throws IOException"
title: "SeekableByteChannel.truncate"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SeekableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SeekableByteChannel.truncate

```java
SeekableByteChannel truncate(long size) throws IOException
```

Truncates the entity, to which this channel is connected, to the given
 size.

 

 If the given size is less than the current size then the entity is
 truncated, discarding any bytes beyond the new end. If the given size is
 greater than or equal to the current size then the entity is not modified.
 In either case, if the current position is greater than the given size
 then it is set to that size.

 

 An implementation of this interface may prohibit truncation when
 connected to an entity, typically a file, opened with the `APPEND APPEND` option.

**参数**

- **size** — The new size, a non-negative byte count

**返回**

- This channel

**异常**

- **NonWritableChannelException** — If this channel was not opened for writing
- **ClosedChannelException** — If this channel is closed
- **IllegalArgumentException** — If the new size is negative
- **IOException** — If some other I/O error occurs
