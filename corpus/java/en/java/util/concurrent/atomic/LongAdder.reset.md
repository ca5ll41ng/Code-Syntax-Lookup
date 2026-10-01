---
id: "java-en-function-longadder-reset"
language: "java"
lang: "en"
category: "function"
name: "LongAdder.reset"
signature: "public void reset()"
title: "LongAdder.reset"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAdder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAdder.reset

```java
public void reset()
```

Resets variables maintaining the sum to zero.  This method may
 be a useful alternative to creating a new adder, but is only
 effective if there are no concurrent updates.  Because this
 method is intrinsically racy, it should only be used when it is
 known that no threads are concurrently updating.
