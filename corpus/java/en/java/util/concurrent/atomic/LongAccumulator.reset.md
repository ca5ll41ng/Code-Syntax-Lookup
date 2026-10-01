---
id: "java-en-function-longaccumulator-reset"
language: "java"
lang: "en"
category: "function"
name: "LongAccumulator.reset"
signature: "public void reset()"
title: "LongAccumulator.reset"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAccumulator.reset

```java
public void reset()
```

Resets variables maintaining updates to the identity value.
 This method may be a useful alternative to creating a new
 updater, but is only effective if there are no concurrent
 updates.  Because this method is intrinsically racy, it should
 only be used when it is known that no threads are concurrently
 updating.
