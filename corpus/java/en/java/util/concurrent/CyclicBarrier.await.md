---
id: "java-en-function-cyclicbarrier-await"
language: "java"
lang: "en"
category: "function"
name: "CyclicBarrier.await"
signature: "public int await() throws InterruptedException, BrokenBarrierException"
title: "CyclicBarrier.await"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CyclicBarrier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CyclicBarrier.await

```java
public int await() throws InterruptedException, BrokenBarrierException
```

Waits until all `getParties parties` have invoked
 `await` on this barrier.

 

If the current thread is not the last to arrive then it is
 disabled for thread scheduling purposes and lies dormant until
 one of the following things happens:
 
 
- The last thread arrives; or
 
- Some other thread `interrupt interrupts`
 the current thread; or
 
- Some other thread `interrupt interrupts`
 one of the other waiting threads; or
 
- Some other thread times out while waiting for barrier; or
 
- Some other thread invokes `reset` on this barrier.
 

 

If the current thread:
 
 
- has its interrupted status set on entry to this method; or
 
- is `interrupt interrupted` while waiting
 

 then `InterruptedException` is thrown and the current thread's
 interrupted status is cleared.

 

If the barrier is `reset` while any thread is waiting,
 or if the barrier `isBroken is broken` when
 `await` is invoked, or while any thread is waiting, then
 `BrokenBarrierException` is thrown.

 

If any thread is `interrupt interrupted` while waiting,
 then all other waiting threads will throw
 `BrokenBarrierException` and the barrier is placed in the broken
 state.

 

If the current thread is the last thread to arrive, and a
 non-null barrier action was supplied in the constructor, then the
 current thread runs the action before allowing the other threads to
 continue.
 If an exception occurs during the barrier action then that exception
 will be propagated in the current thread and the barrier is placed in
 the broken state.

**返回**

- the arrival index of the current thread, where index `getParties() - 1` indicates the first to arrive and zero indicates the last to arrive

**异常**

- **InterruptedException** — if the current thread was interrupted while waiting
- **BrokenBarrierException** — if another thread was interrupted or timed out while the current thread was waiting, or the barrier was reset, or the barrier was broken when `await` was called, or the barrier action (if present) failed due to an exception
