---
id: "java-en-function-cyclicbarrier-reset"
language: "java"
lang: "en"
category: "function"
name: "CyclicBarrier.reset"
signature: "public void reset()"
title: "CyclicBarrier.reset"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CyclicBarrier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CyclicBarrier.reset

```java
public void reset()
```

Resets the barrier to its initial state.  If any parties are
 currently waiting at the barrier, they will return with a
 `BrokenBarrierException`. Note that resets after
 a breakage has occurred for other reasons can be complicated to
 carry out; threads need to re-synchronize in some other way,
 and choose one to perform the reset.  It may be preferable to
 instead create a new barrier for subsequent use.
