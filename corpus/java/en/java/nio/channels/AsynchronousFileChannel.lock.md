---
id: "java-en-function-asynchronousfilechannel-lock"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.lock"
signature: "public abstract <A> void lock(long position, long size, boolean shared, A attachment, CompletionHandler<FileLock,? super A> handler)"
title: "AsynchronousFileChannel.lock"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.lock

```java
public abstract <A> void lock(long position, long size, boolean shared, A attachment, CompletionHandler<FileLock,? super A> handler)
```

Acquires a lock on the given region of this channel's file.

 

 This method initiates an operation to acquire a lock on the given
 region of this channel's file. The `handler` parameter is a
 completion handler that is invoked when the lock is acquired (or the
 operation fails). The result passed to the completion handler is the
 resulting `FileLock`.

 

 The region specified by the `position` and `size`
 parameters need not be contained within, or even overlap, the actual
 underlying file.  Lock regions are fixed in size; if a locked region
 initially contains the end of the file and the file grows beyond the
 region then the new portion of the file will not be covered by the lock.
 If a file is expected to grow in size and a lock on the entire file is
 required then a region starting at zero, and no smaller than the
 expected maximum size of the file, should be locked.  The two-argument
 `lock` method simply locks a region
 of size `MAX_VALUE`.  If the `position` is non-negative
 and the `size` is zero, then a lock of size
 `Long.MAX_VALUE - position` is returned.  If a lock that
 overlaps the requested region is already held by this Java virtual
 machine, or this method has been invoked to lock an overlapping region
 and that operation has not completed, then this method throws
 `OverlappingFileLockException`.

 

 Some operating systems do not support a mechanism to acquire a file
 lock in an asynchronous manner. Consequently an implementation may
 acquire the file lock in a background thread or from a task executed by
 a thread in the associated thread pool. If there are many lock operations
 outstanding then it may consume threads in the Java virtual machine for
 indefinite periods.

 

 Some operating systems do not support shared locks, in which case a
 request for a shared lock is automatically converted into a request for
 an exclusive lock.  Whether the newly-acquired lock is shared or
 exclusive may be tested by invoking the resulting lock object's `isShared() isShared` method.

 

 File locks are held on behalf of the entire Java virtual machine.
 They are not suitable for controlling access to a file by multiple
 threads within the same virtual machine.

**参数**

- **The** — type of the attachment
- **position** — The position at which the locked region is to start; must be non-negative
- **size** — The size of the locked region; must be non-negative, and the sum `position`&nbsp;+&nbsp;`size` must be non-negative. A value of zero means to lock all bytes from the specified starting position to the end of the file, regardless of whether the file is subsequently extended or truncated
- **shared** — `true` to request a shared lock, in which case this channel must be open for reading (and possibly writing); `false` to request an exclusive lock, in which case this channel must be open for writing (and possibly reading)
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **OverlappingFileLockException** — If a lock that overlaps the requested region is already held by this Java virtual machine, or there is already a pending attempt to lock an overlapping region
- **IllegalArgumentException** — If the preconditions on the parameters do not hold
- **NonReadableChannelException** — If `shared` is true but this channel was not opened for reading
- **NonWritableChannelException** — If `shared` is false but this channel was not opened for writing
