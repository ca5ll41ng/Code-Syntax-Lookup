---
id: "java-en-function-semaphore-reducepermits"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.reducePermits"
signature: "protected void reducePermits(int reduction)"
title: "Semaphore.reducePermits"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.reducePermits

```java
protected void reducePermits(int reduction)
```

Shrinks the number of available permits by the indicated
 reduction. This method can be useful in subclasses that use
 semaphores to track resources that become unavailable. This
 method differs from `acquire` in that it does not block
 waiting for permits to become available.

**参数**

- **reduction** — the number of permits to remove

**异常**

- **IllegalArgumentException** — if `reduction` is negative
