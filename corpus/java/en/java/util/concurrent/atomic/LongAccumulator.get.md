---
id: "java-en-function-longaccumulator-get"
language: "java"
lang: "en"
category: "function"
name: "LongAccumulator.get"
signature: "public long get()"
title: "LongAccumulator.get"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAccumulator.get

```java
public long get()
```

Returns the current value.  The returned value is NOT
 an atomic snapshot; invocation in the absence of concurrent
 updates returns an accurate result, but concurrent updates that
 occur while the value is being calculated might not be
 incorporated.

**返回**

- the current value
