---
id: "java-en-function-semaphore-drainpermits"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.drainPermits"
signature: "public int drainPermits()"
title: "Semaphore.drainPermits"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.drainPermits

```java
public int drainPermits()
```

Acquires and returns all permits that are immediately
 available, or if negative permits are available, releases them.
 Upon return, zero permits are available.

**返回**

- the number of permits acquired or, if negative, the number released
