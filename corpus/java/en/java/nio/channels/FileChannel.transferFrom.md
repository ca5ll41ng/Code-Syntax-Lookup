---
id: "java-en-function-filechannel-transferfrom"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.transferFrom"
signature: "public abstract long transferFrom(ReadableByteChannel src, long position, long count) throws IOException"
title: "FileChannel.transferFrom"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.transferFrom

```java
public abstract long transferFrom(ReadableByteChannel src, long position, long count) throws IOException
```

Transfers bytes into this channel's file from the given readable byte
 channel.

 

 An attempt is made to read up to `count` bytes from the
 source channel and write them to this channel's file starting at the
 given `position`.  An invocation of this method may or may not
 transfer all of the requested bytes; whether or not it does so depends
 upon the natures and states of the channels.  Fewer than the requested
 number of bytes will be transferred if the source channel has fewer than
 `count` bytes remaining, or if the source channel is non-blocking
 and has fewer than `count` bytes immediately available in its
 input buffer. No bytes are transferred, and zero is returned, if the
 source has reached end-of-stream.

 

 This method does not modify this channel's position.  If the given
 position is greater than or equal to the file's current size then the
 file will be grown to accommodate the new bytes; the values of any bytes
 between the previous end-of-file and the newly-written bytes are
 unspecified.  If the source channel has a position then bytes are read
 starting at that position and then the position is incremented by the
 number of bytes read.

 

 This method is potentially much more efficient than a simple loop
 that reads from the source channel and writes to this channel.  Many
 operating systems can transfer bytes directly from the source channel
 into the filesystem cache without actually copying them.

**参数**

- **src** — The source channel
- **position** — The file position at which the transfer is to begin; must be non-negative
- **count** — The maximum number of bytes to be transferred; must be non-negative

**返回**

- The number of bytes, possibly zero, that were actually transferred

**异常**

- **IllegalArgumentException** — If the preconditions on the parameters do not hold
- **NonReadableChannelException** — If the source channel was not opened for reading
- **NonWritableChannelException** — If this channel was not opened for writing
- **ClosedChannelException** — If either this channel or the source channel is closed
- **AsynchronousCloseException** — If another thread closes either channel while the transfer is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the transfer is in progress, thereby closing both channels and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
