---
id: "java-en-function-doubleaccumulator-get"
language: "java"
lang: "en"
category: "function"
name: "DoubleAccumulator.get"
signature: "public double get()"
title: "DoubleAccumulator.get"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/DoubleAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleAccumulator.get

```java
public double get()
```

Returns the current value.  The returned value is NOT
 an atomic snapshot; invocation in the absence of concurrent
 updates returns an accurate result, but concurrent updates that
 occur while the value is being calculated might not be
 incorporated.

**返回**

- the current value
