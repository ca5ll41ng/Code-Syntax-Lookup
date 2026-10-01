---
id: "java-en-function-timeunit-toseconds"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.toSeconds"
signature: "public long toSeconds(long duration)"
title: "TimeUnit.toSeconds"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.toSeconds

```java
public long toSeconds(long duration)
```

Equivalent to
 `convert`.

**参数**

- **duration** — the duration

**返回**

- the converted duration, or `Long.MIN_VALUE` if conversion would negatively overflow, or `Long.MAX_VALUE` if it would positively overflow.
