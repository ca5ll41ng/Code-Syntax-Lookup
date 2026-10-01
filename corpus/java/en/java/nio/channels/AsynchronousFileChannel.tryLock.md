---
id: "java-en-function-asynchronousfilechannel-trylock"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.tryLock"
signature: "public abstract FileLock tryLock(long position, long size, boolean shared) throws IOException"
title: "AsynchronousFileChannel.tryLock"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.tryLock

```java
public abstract FileLock tryLock(long position, long size, boolean shared) throws IOException
```

Attempts to acquire a lock on the given region of this channel's file.

 

 This method does not block. An invocation always returns immediately,
 either having acquired a lock on the requested region or having failed to
 do so.  If it fails to acquire a lock because an overlapping lock is held
 by another program then it returns `null`.  If it fails to acquire
 a lock for any other reason then an appropriate exception is thrown.  If
 the `position` is non-negative and the `size` is zero, then a
 lock of size `Long.MAX_VALUE - position` is returned.

**参数**

- **position** — The position at which the locked region is to start; must be non-negative
- **size** — The size of the locked region; must be non-negative, and the sum `position`&nbsp;+&nbsp;`size` must be non-negative. A value of zero means to lock all bytes from the specified starting position to the end of the file, regardless of whether the file is subsequently extended or truncated
- **shared** — `true` to request a shared lock, `false` to request an exclusive lock

**返回**

- A lock object representing the newly-acquired lock, or `null` if the lock could not be acquired because another program holds an overlapping lock

**异常**

- **IllegalArgumentException** — If the preconditions on the parameters do not hold
- **ClosedChannelException** — If this channel is closed
- **OverlappingFileLockException** — If a lock that overlaps the requested region is already held by this Java virtual machine, or if another thread is already blocked in this method and is attempting to lock an overlapping region of the same file
- **NonReadableChannelException** — If `shared` is true but this channel was not opened for reading
- **NonWritableChannelException** — If `shared` is false but this channel was not opened for writing
- **IOException** — If some other I/O error occurs

**参见**

- #lock(Object,CompletionHandler)
- #lock(long,long,boolean,Object,CompletionHandler)
- #tryLock()
