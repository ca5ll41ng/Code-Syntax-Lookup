---
id: "java-en-function-cyclicbarrier-isbroken"
language: "java"
lang: "en"
category: "function"
name: "CyclicBarrier.isBroken"
signature: "public boolean isBroken()"
title: "CyclicBarrier.isBroken"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CyclicBarrier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CyclicBarrier.isBroken

```java
public boolean isBroken()
```

Queries if this barrier is in a broken state.

**返回**

- `true` if one or more parties broke out of this barrier due to interruption or timeout since construction or the last reset, or a barrier action failed due to an exception; `false` otherwise.
