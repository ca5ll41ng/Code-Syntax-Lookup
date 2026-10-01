---
id: "java-en-function-java-util-concurrent-locks-stampedlock"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.locks.StampedLock"
title: "StampedLock"
directive: "type"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock

A capability-based lock with three modes for controlling read/write
 access.  The state of a StampedLock consists of a version and mode.
 Lock acquisition methods return a stamp that represents and
 controls access with respect to a lock state; "try" versions of
 these methods may instead return the special value zero to
 represent failure to acquire access. Lock release and conversion
 methods require stamps as arguments, and fail if they do not match
 the state of the lock. The three modes are:

 

  
- **Writing.** Method `writeLock` possibly blocks
   waiting for exclusive access, returning a stamp that can be used
   in method `unlockWrite` to release the lock. Untimed and
   timed versions of `tryWriteLock` are also provided. When
   the lock is held in write mode, no read locks may be obtained,
   and all optimistic read validations will fail.

  
- **Reading.** Method `readLock` possibly blocks
   waiting for non-exclusive access, returning a stamp that can be
   used in method `unlockRead` to release the lock. Untimed
   and timed versions of `tryReadLock` are also provided.

  
- **Optimistic Reading.** Method `tryOptimisticRead`
   returns a non-zero stamp only if the lock is not currently held in
   write mode.  Method `validate` returns true if the lock has not
   been acquired in write mode since obtaining a given stamp, in which
   case all actions prior to the most recent write lock release
   happen-before actions following the call to `tryOptimisticRead`.
   This mode can be thought of as an extremely weak version of a
   read-lock, that can be broken by a writer at any time.  The use of
   optimistic read mode for short read-only code segments often reduces
   contention and improves throughput.  However, its use is inherently
   fragile.  Optimistic read sections should only read fields and hold
   them in local variables for later use after validation. Fields read
   while in optimistic read mode may be wildly inconsistent, so usage
   applies only when you are familiar enough with data representations to
   check consistency and/or repeatedly invoke method `validate()`.
   For example, such steps are typically required when first reading an
   object or array reference, and then accessing one of its fields,
   elements or methods.

 

 

This class also supports methods that conditionally provide
 conversions across the three modes. For example, method `tryConvertToWriteLock` attempts to "upgrade" a mode, returning
 a valid write stamp if (1) already in writing mode (2) in reading
 mode and there are no other readers or (3) in optimistic read mode
 and the lock is available. The forms of these methods are designed to
 help reduce some of the code bloat that otherwise occurs in
 retry-based designs.

 

StampedLocks are designed for use as internal utilities in the
 development of thread-safe components. Their use relies on
 knowledge of the internal properties of the data, objects, and
 methods they are protecting.  They are not reentrant, so locked
 bodies should not call other unknown methods that may try to
 re-acquire locks (although you may pass a stamp to other methods
 that can use or convert it).  The use of read lock modes relies on
 the associated code sections being side-effect-free.  Unvalidated
 optimistic read sections cannot call methods that are not known to
 tolerate potential inconsistencies.  Stamps use finite
 representations, and are not cryptographically secure (i.e., a
 valid stamp may be guessable). Stamp values may recycle after (no
 sooner than) one year of continuous operation. A stamp held without
 use or validation for longer than this period may fail to validate
 correctly.  StampedLocks are serializable, but always deserialize
 into initial unlocked state, so they are not useful for remote
 locking.

 

Like `java.util.concurrent.Semaphore Semaphore`, but unlike most
 `Lock` implementations, StampedLocks have no notion of ownership.
 Locks acquired in one thread can be released or converted in another.

 

The scheduling policy of StampedLock does not consistently
 prefer readers over writers or vice versa.  All "try" methods are
 best-effort and do not necessarily conform to any scheduling or
 fairness policy. A zero return from any "try" method for acquiring
 or converting locks does not carry any information about the state
 of the lock; a subsequent invocation may succeed.

 

Because it supports coordinated usage across multiple lock
 modes, this class does not directly implement the `Lock` or
 `ReadWriteLock` interfaces. However, a StampedLock may be
 viewed `asReadLock`, `asWriteLock`, or `asReadWriteLock` in applications requiring only the associated
 set of functionality.

 

**Memory Synchronization.** Methods with the effect of
 successfully locking in any mode have the same memory
 synchronization effects as a Lock action, as described in
 Chapter 17 of The Java Language Specification.
 Methods successfully unlocking in write mode have the same memory
 synchronization effects as an Unlock action.  In optimistic
 read usages, actions prior to the most recent write mode unlock action
 are guaranteed to happen-before those following a tryOptimisticRead
 only if a later validate returns true; otherwise there is no guarantee
 that the reads between tryOptimisticRead and validate obtain a
 consistent snapshot.

 

**Sample Usage.** The following illustrates some usage idioms
 in a class that maintains simple two-dimensional points. The sample
 code illustrates some try/catch conventions even though they are
 not strictly needed here because no exceptions can occur in their
 bodies.

 
```
 `class Point {
   private double x, y;
   private final StampedLock sl = new StampedLock();

   // an exclusively locked method
   void move(double deltaX, double deltaY) {
     long stamp = sl.writeLock();
     try {
       x += deltaX;
       y += deltaY;
     ` finally {
       sl.unlockWrite(stamp);
     }
   }

   // a read-only method
   // upgrade from optimistic read to read lock
   double distanceFromOrigin() {
     long stamp = sl.tryOptimisticRead();
     try {
       retryHoldingLock: for (;; stamp = sl.readLock()) {
         if (stamp == 0L)
           continue retryHoldingLock;
         // possibly racy reads
         double currentX = x;
         double currentY = y;
         if (!sl.validate(stamp))
           continue retryHoldingLock;
         return Math.hypot(currentX, currentY);
       }
     } finally {
       if (StampedLock.isReadLockStamp(stamp))
         sl.unlockRead(stamp);
     }
   }

   // upgrade from optimistic read to write lock
   void moveIfAtOrigin(double newX, double newY) {
     long stamp = sl.tryOptimisticRead();
     try {
       retryHoldingLock: for (;; stamp = sl.writeLock()) {
         if (stamp == 0L)
           continue retryHoldingLock;
         // possibly racy reads
         double currentX = x;
         double currentY = y;
         if (!sl.validate(stamp))
           continue retryHoldingLock;
         if (currentX != 0.0 || currentY != 0.0)
           break;
         stamp = sl.tryConvertToWriteLock(stamp);
         if (stamp == 0L)
           continue retryHoldingLock;
         // exclusive access
         x = newX;
         y = newY;
         return;
       }
     } finally {
       if (StampedLock.isWriteLockStamp(stamp))
         sl.unlockWrite(stamp);
     }
   }

   // upgrade read lock to write lock
   void moveIfAtOrigin2(double newX, double newY) {
     long stamp = sl.readLock();
     try {
       while (x == 0.0 && y == 0.0) {
         long ws = sl.tryConvertToWriteLock(stamp);
         if (ws != 0L) {
           stamp = ws;
           x = newX;
           y = newY;
           break;
         }
         else {
           sl.unlockRead(stamp);
           stamp = sl.writeLock();
         }
       }
     } finally {
       sl.unlock(stamp);
     }
   }
 }}
```

> *Since 1.8*
