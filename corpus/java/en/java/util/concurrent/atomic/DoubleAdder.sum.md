---
id: "java-en-function-doubleadder-sum"
language: "java"
lang: "en"
category: "function"
name: "DoubleAdder.sum"
signature: "public double sum()"
title: "DoubleAdder.sum"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/DoubleAdder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleAdder.sum

```java
public double sum()
```

Returns the current sum.  The returned value is NOT an
 atomic snapshot; invocation in the absence of concurrent
 updates returns an accurate result, but concurrent updates that
 occur while the sum is being calculated might not be
 incorporated.  Also, because floating-point arithmetic is not
 strictly associative, the returned result need not be identical
 to the value that would be obtained in a sequential series of
 updates to a single variable.

**返回**

- the sum
