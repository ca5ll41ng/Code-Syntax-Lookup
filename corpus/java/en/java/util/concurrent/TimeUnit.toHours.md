---
id: "java-en-function-timeunit-tohours"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.toHours"
signature: "public long toHours(long duration)"
title: "TimeUnit.toHours"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.toHours

```java
public long toHours(long duration)
```

Equivalent to
 `convert`.

**参数**

- **duration** — the duration

**返回**

- the converted duration, or `Long.MIN_VALUE` if conversion would negatively overflow, or `Long.MAX_VALUE` if it would positively overflow.

> *Since 1.6*
