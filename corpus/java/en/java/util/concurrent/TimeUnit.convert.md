---
id: "java-en-function-timeunit-convert"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.convert"
signature: "public long convert(long sourceDuration, TimeUnit sourceUnit)"
title: "TimeUnit.convert"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.convert

```java
public long convert(long sourceDuration, TimeUnit sourceUnit)
```

Converts the given time duration in the given unit to this unit.
 Conversions from finer to coarser granularities truncate, so
 lose precision. For example, converting `999` milliseconds
 to seconds results in `0`. Conversions from coarser to
 finer granularities with arguments that would numerically
 overflow saturate to `Long.MIN_VALUE` if negative or
 `Long.MAX_VALUE` if positive.

 

For example, to convert 10 minutes to milliseconds, use:
 `TimeUnit.MILLISECONDS.convert(10L, TimeUnit.MINUTES)`

**参数**

- **sourceDuration** — the time duration in the given `sourceUnit`
- **sourceUnit** — the unit of the `sourceDuration` argument

**返回**

- the converted duration in this unit, or `Long.MIN_VALUE` if conversion would negatively overflow, or `Long.MAX_VALUE` if it would positively overflow.
