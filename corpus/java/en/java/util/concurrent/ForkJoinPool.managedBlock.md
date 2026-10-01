---
id: "java-en-function-forkjoinpool-managedblock"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.managedBlock"
signature: "public static void managedBlock(ManagedBlocker blocker) throws InterruptedException"
title: "ForkJoinPool.managedBlock"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.managedBlock

```java
public static void managedBlock(ManagedBlocker blocker) throws InterruptedException
```

Runs the given possibly blocking task.  When `inForkJoinPool() running in a ForkJoinPool`, this
 method possibly arranges for a spare thread to be activated if
 necessary to ensure sufficient parallelism while the current
 thread is blocked in `block blocker.block`.

 

This method repeatedly calls `blocker.isReleasable()` and
 `blocker.block()` until either method returns `true`.
 Every call to `blocker.block()` is preceded by a call to
 `blocker.isReleasable()` that returned `false`.

 

If not running in a ForkJoinPool, this method is
 behaviorally equivalent to
 
```
 `while (!blocker.isReleasable())
   if (blocker.block())
     break;`
```

 If running in a ForkJoinPool, the pool may first be expanded to
 ensure sufficient parallelism available during the call to
 `blocker.block()`.

**参数**

- **blocker** — the blocker task

**异常**

- **InterruptedException** — if `blocker.block()` did so
