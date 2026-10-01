---
id: "java-en-function-longadder-sum"
language: "java"
lang: "en"
category: "function"
name: "LongAdder.sum"
signature: "public long sum()"
title: "LongAdder.sum"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAdder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAdder.sum

```java
public long sum()
```

Returns the current sum.  The returned value is NOT an
 atomic snapshot; invocation in the absence of concurrent
 updates returns an accurate result, but concurrent updates that
 occur while the sum is being calculated might not be
 incorporated.

**返回**

- the sum
