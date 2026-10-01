---
id: "java-en-function-threadlocalrandom-current"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocalRandom.current"
signature: "public static ThreadLocalRandom current()"
title: "ThreadLocalRandom.current"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadLocalRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocalRandom.current

```java
public static ThreadLocalRandom current()
```

Returns the current thread's `ThreadLocalRandom` object.
 Methods of this object should be called only by the current thread,
 not by other threads.

**返回**

- the current thread's `ThreadLocalRandom`
