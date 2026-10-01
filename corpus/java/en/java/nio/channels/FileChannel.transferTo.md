---
id: "java-en-function-filechannel-transferto"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.transferTo"
signature: "public abstract long transferTo(long position, long count, WritableByteChannel target) throws IOException"
title: "FileChannel.transferTo"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.transferTo

```java
public abstract long transferTo(long position, long count, WritableByteChannel target) throws IOException
```

Transfers bytes from this channel's file to the given writable byte
 channel.

 

 An attempt is made to read up to `count` bytes starting at
 the given `position` in this channel's file and write them to the
 target channel.  An invocation of this method may or may not transfer
 all of the requested bytes; whether or not it does so depends upon the
 natures and states of the channels.  Fewer than the requested number of
 bytes are transferred if this channel's file contains fewer than
 `count` bytes starting at the given `position`, or if the
 target channel is non-blocking and it has fewer than `count`
 bytes free in its output buffer.

 

 This method does not modify this channel's position.  If the given
 position is greater than or equal to the file's current size then no
 bytes are transferred.  If the target channel has a position then bytes
 are written starting at that position and then the position
 is incremented by the number of bytes written.

 

 This method is potentially much more efficient than a simple loop
 that reads from this channel and writes to the target channel.  Many
 operating systems can transfer bytes directly from the filesystem cache
 to the target channel without actually copying them.

**参数**

- **position** — The position within the file at which the transfer is to begin; must be non-negative
- **count** — The maximum number of bytes to be transferred; must be non-negative
- **target** — The target channel

**返回**

- The number of bytes, possibly zero, that were actually transferred

**异常**

- **IllegalArgumentException** — If the preconditions on the parameters do not hold
- **NonReadableChannelException** — If this channel was not opened for reading
- **NonWritableChannelException** — If the target channel was not opened for writing
- **ClosedChannelException** — If either this channel or the target channel is closed
- **AsynchronousCloseException** — If another thread closes either channel while the transfer is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the transfer is in progress, thereby closing both channels and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
