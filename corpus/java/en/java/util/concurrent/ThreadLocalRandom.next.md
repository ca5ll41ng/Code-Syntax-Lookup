---
id: "java-en-function-threadlocalrandom-next"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocalRandom.next"
signature: "protected int next(int bits)"
title: "ThreadLocalRandom.next"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadLocalRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocalRandom.next

```java
protected int next(int bits)
```

Generates a pseudorandom number with the indicated number of
 low-order bits.  Because this class has no subclasses, this
 method cannot be invoked or overridden.

**参数**

- **bits** — random bits

**返回**

- the next pseudorandom value from this random number generator's sequence
