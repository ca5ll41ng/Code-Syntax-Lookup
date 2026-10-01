---
id: "java-en-function-managedblocker-block"
language: "java"
lang: "en"
category: "function"
name: "ManagedBlocker.block"
signature: "boolean block() throws InterruptedException"
title: "ManagedBlocker.block"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ManagedBlocker.block

```java
boolean block() throws InterruptedException
```

Possibly blocks the current thread, for example waiting for
 a lock or condition.

**返回**

- `true` if no additional blocking is necessary (i.e., if isReleasable would return true)

**异常**

- **InterruptedException** — if interrupted while waiting (the method is not required to do so, but is allowed to)
