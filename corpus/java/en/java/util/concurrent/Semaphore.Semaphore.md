---
id: "java-en-function-semaphore-semaphore"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.Semaphore"
signature: "public Semaphore(int permits)"
title: "Semaphore.Semaphore"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.Semaphore

```java
public Semaphore(int permits)
```

Creates a `Semaphore` with the given number of
 permits and nonfair fairness setting.

**参数**

- **permits** — the initial number of permits available. This value may be negative, in which case releases must occur before any acquires will be granted.
