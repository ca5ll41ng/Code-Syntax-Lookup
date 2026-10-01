---
id: "java-en-function-timeunit-tomillis"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.toMillis"
signature: "public long toMillis(long duration)"
title: "TimeUnit.toMillis"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.toMillis

```java
public long toMillis(long duration)
```

Equivalent to
 `convert`.

**参数**

- **duration** — the duration

**返回**

- the converted duration, or `Long.MIN_VALUE` if conversion would negatively overflow, or `Long.MAX_VALUE` if it would positively overflow.
