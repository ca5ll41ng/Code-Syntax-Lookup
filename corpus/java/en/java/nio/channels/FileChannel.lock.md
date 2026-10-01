---
id: "java-en-function-filechannel-lock"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.lock"
signature: "public abstract FileLock lock(long position, long size, boolean shared) throws IOException"
title: "FileChannel.lock"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.lock

```java
public abstract FileLock lock(long position, long size, boolean shared) throws IOException
```

Acquires a lock on the given region of this channel's file.

 

 An invocation of this method will block until the region can be
 locked, this channel is closed, or the invoking thread is interrupted,
 whichever comes first.

 

 If this channel is closed by another thread during an invocation of
 this method then an `AsynchronousCloseException` will be thrown.

 

 If the invoking thread is interrupted while waiting to acquire the
 lock then its interrupted status will be set and a `FileLockInterruptionException` will be thrown.  If the invoker's
 interrupted status is set when this method is invoked then that exception
 will be thrown immediately; the thread's interrupted status will not be
 changed.

 

 The region specified by the `position` and `size`
 parameters need not be contained within, or even overlap, the actual
 underlying file.  Lock regions are fixed in size; if a locked region
 initially contains the end of the file and the file grows beyond the
 region then the new portion of the file will not be covered by the lock.
 If a file is expected to grow in size and a lock on the entire file is
 required then a region starting at zero, and no smaller than the
 expected maximum size of the file, should be locked.  The zero-argument
 `lock` method simply locks a region of size `MAX_VALUE`.  If the `position` is non-negative and the
 `size` is zero, then a lock of size
 `Long.MAX_VALUE - position` is returned.

 

 Some operating systems do not support shared locks, in which case a
 request for a shared lock is automatically converted into a request for
 an exclusive lock.  Whether the newly-acquired lock is shared or
 exclusive may be tested by invoking the resulting lock object's `isShared() isShared` method.

 

 File locks are held on behalf of the entire Java virtual machine.
 They are not suitable for controlling access to a file by multiple
 threads within the same virtual machine.

**参数**

- **position** — The position at which the locked region is to start; must be non-negative
- **size** — The size of the locked region; must be non-negative, and the sum `position`&nbsp;+&nbsp;`size` must be non-negative. A value of zero means to lock all bytes from the specified starting position to the end of the file, regardless of whether the file is subsequently extended or truncated
- **shared** — `true` to request a shared lock, in which case this channel must be open for reading (and possibly writing); `false` to request an exclusive lock, in which case this channel must be open for writing (and possibly reading)

**返回**

- A lock object representing the newly-acquired lock

**异常**

- **IllegalArgumentException** — If the preconditions on the parameters do not hold
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the invoking thread is blocked in this method
- **FileLockInterruptionException** — If the invoking thread is interrupted while blocked in this method
- **OverlappingFileLockException** — If a lock that overlaps the requested region is already held by this Java virtual machine, or if another thread is already blocked in this method and is attempting to lock an overlapping region
- **NonReadableChannelException** — If `shared` is `true` but this channel was not opened for reading
- **NonWritableChannelException** — If `shared` is `false` but this channel was not opened for writing
- **IOException** — If some other I/O error occurs

**参见**

- #lock()
- #tryLock()
- #tryLock(long,long,boolean)
