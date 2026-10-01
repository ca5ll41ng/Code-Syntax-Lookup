---
id: "java-en-function-java-util-concurrent-locks-locksupport"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.locks.LockSupport"
title: "LockSupport"
directive: "type"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/LockSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockSupport

Basic thread blocking primitives for creating locks and other
 synchronization classes.

 

This class associates, with each thread that uses it, a permit
 (in the sense of the `java.util.concurrent.Semaphore
 Semaphore` class). A call to `park` will return immediately
 if the permit is available, consuming it in the process; otherwise
 it may block.  A call to `unpark` makes the permit
 available, if it was not already available. (Unlike with Semaphores
 though, permits do not accumulate. There is at most one.)
 Reliable usage requires the use of volatile (or atomic) variables
 to control when to park or unpark.  Orderings of calls to these
 methods are maintained with respect to volatile variable accesses,
 but not necessarily non-volatile variable accesses.

 

Methods `park` and `unpark` provide efficient
 means of blocking and unblocking threads that do not encounter the
 problems that cause the deprecated methods `Thread.suspend`
 and `Thread.resume` to be unusable for such purposes: Races
 between one thread invoking `park` and another thread trying
 to `unpark` it will preserve liveness, due to the
 permit. Additionally, `park` will return if the caller's
 thread was interrupted, and timeout versions are supported. The
 `park` method may also return at any other time, for "no
 reason", so in general must be invoked within a loop that rechecks
 conditions upon return. In this sense `park` serves as an
 optimization of a "busy wait" that does not waste as much time
 spinning, but must be paired with an `unpark` to be
 effective.

 

The three forms of `park` each also support a
 `blocker` object parameter. This object is recorded while
 the thread is blocked to permit monitoring and diagnostic tools to
 identify the reasons that threads are blocked. (Such tools may
 access blockers using method `getBlocker`.)
 The use of these forms rather than the original forms without this
 parameter is strongly encouraged. The normal argument to supply as
 a `blocker` within a lock implementation is `this`.

 

These methods are designed to be used as tools for creating
 higher-level synchronization utilities, and are not in themselves
 useful for most concurrency control applications.  The `park`
 method is designed for use only in constructions of the form:

 
```
 `while (!canProceed()) {
   // ensure request to unpark is visible to other threads
   ...
   LockSupport.park(this);
 `}
```

 where no actions by the thread publishing a request to unpark,
 prior to the call to `park`, entail locking or blocking.
 Because only one permit is associated with each thread, any
 intermediary uses of `park`, including implicitly via class
 loading, could lead to an unresponsive thread (a "lost unpark").

 

**Sample Usage.** Here is a sketch of a first-in-first-out
 non-reentrant lock class:
 
```
 `class FIFOMutex {
   private final AtomicBoolean locked = new AtomicBoolean(false);
   private final Queue waiters
     = new ConcurrentLinkedQueue<>();

   public void lock() {
     boolean wasInterrupted = false;
     // publish current thread for unparkers
     waiters.add(Thread.currentThread());

     // Block while not first in queue or cannot acquire lock
     while (waiters.peek() != Thread.currentThread() ||
            !locked.compareAndSet(false, true)) {
       LockSupport.park(this);
       // ignore interrupts while waiting
       if (Thread.interrupted())
         wasInterrupted = true;
     `

     waiters.remove();
     // ensure correct interrupted status on return
     if (wasInterrupted)
       Thread.currentThread().interrupt();
   }

   public void unlock() {
     locked.set(false);
     LockSupport.unpark(waiters.peek());
   }

   static {
     // Reduce the risk of "lost unpark" due to classloading
     Class<?> ensureLoaded = LockSupport.class;
   }
 }}
```

> *Since 1.5*
