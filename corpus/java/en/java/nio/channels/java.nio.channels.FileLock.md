---
id: "java-en-function-java-nio-channels-filelock"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.FileLock"
title: "FileLock"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock

A token representing a lock on a region of a file.

 

 A file-lock object is created each time a lock is acquired on a file via
 one of the `lock(long,long,boolean) lock` or `tryLock(long,long,boolean) tryLock` methods of the
 `FileChannel` class, or the `lock(long,long,boolean,Object,CompletionHandler) lock`
 or `tryLock(long,long,boolean) tryLock`
 methods of the `AsynchronousFileChannel` class.

 

 A file-lock object is initially valid.  It remains valid until the lock
 is released by invoking the `release release` method, by closing the
 channel that was used to acquire it, or by the termination of the Java
 virtual machine, whichever comes first.  The validity of a lock may be
 tested by invoking its `isValid isValid` method.

 

 A file lock is either exclusive or shared.  A shared lock
 prevents other concurrently-running programs from acquiring an overlapping
 exclusive lock, but does allow them to acquire overlapping shared locks.  An
 exclusive lock prevents other programs from acquiring an overlapping lock of
 either type.  Once it is released, a lock has no further effect on the locks
 that may be acquired by other programs.

 

 Whether a lock is exclusive or shared may be determined by invoking its
 `isShared isShared` method.  Some platforms do not support shared
 locks, in which case a request for a shared lock is automatically converted
 into a request for an exclusive lock.

 

 The locks held on a particular file by a single Java virtual machine do
 not overlap.  The `overlaps overlaps` method may be used to test
 whether a candidate lock range overlaps an existing lock.

 

 A file-lock object records the file channel upon whose file the lock is
 held, the type and validity of the lock, and the position and size of the
 locked region.  Only the validity of a lock is subject to change over time;
 all other aspects of a lock's state are immutable.

 

 File locks are held on behalf of the entire Java virtual machine.
 They are not suitable for controlling access to a file by multiple
 threads within the same virtual machine.

 

 File-lock objects are safe for use by multiple concurrent threads.

  Platform dependencies 

 

 This file-locking API is intended to map directly to the native locking
 facility of the underlying operating system.  Thus the locks held on a file
 should be visible to all programs that have access to the file, regardless
 of the language in which those programs are written.

 

 Whether or not a lock actually prevents another program from accessing
 the content of the locked region is system-dependent and therefore
 unspecified.  The native file-locking facilities of some systems are merely
 advisory, meaning that programs must cooperatively observe a known
 locking protocol in order to guarantee data integrity.  On other systems
 native file locks are mandatory, meaning that if one program locks a
 region of a file then other programs are actually prevented from accessing
 that region in a way that would violate the lock.  On yet other systems,
 whether native file locks are advisory or mandatory is configurable on a
 per-file basis.  To ensure consistent and correct behavior across platforms,
 it is strongly recommended that the locks provided by this API be used as if
 they were advisory locks.

 

 On some systems, acquiring a mandatory lock on a region of a file
 prevents that region from being `map
 mapped into memory`, and vice versa.  Programs that combine
 locking and mapping should be prepared for this combination to fail.

 

 On some systems, closing a channel releases all locks held by the Java
 virtual machine on the underlying file regardless of whether the locks were
 acquired via that channel or via another channel open on the same file.  It
 is strongly recommended that, within a program, a unique channel be used to
 acquire all locks on any given file.

 

 Some network filesystems permit file locking to be used with
 memory-mapped files only when the locked regions are page-aligned and a
 whole multiple of the underlying hardware's page size.  Some network
 filesystems do not implement file locks on regions that extend past a
 certain position, often 230 or 231.  In general, great
 care should be taken when locking files that reside on network filesystems.

> *Since 1.4*
