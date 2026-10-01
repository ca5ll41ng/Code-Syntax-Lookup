---
id: "java-en-function-timeunit-of"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.of"
signature: "public static TimeUnit of(ChronoUnit chronoUnit)"
title: "TimeUnit.of"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.of

```java
public static TimeUnit of(ChronoUnit chronoUnit)
```

Converts a `ChronoUnit` to the equivalent `TimeUnit`.

**参数**

- **chronoUnit** — the ChronoUnit to convert

**返回**

- the converted equivalent TimeUnit

**异常**

- **IllegalArgumentException** — if `chronoUnit` has no equivalent TimeUnit
- **NullPointerException** — if `chronoUnit` is null

> *Since 9*
