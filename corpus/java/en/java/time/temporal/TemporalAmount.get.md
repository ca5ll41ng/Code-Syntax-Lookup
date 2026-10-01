---
id: "java-en-function-temporalamount-get"
language: "java"
lang: "en"
category: "function"
name: "TemporalAmount.get"
signature: "long get(TemporalUnit unit)"
title: "TemporalAmount.get"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAmount.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAmount.get

```java
long get(TemporalUnit unit)
```

Returns the value of the requested unit.
 The units returned from `getUnits` uniquely define the
 value of the `TemporalAmount`.  A value must be returned
 for each unit listed in `getUnits`.

 Implementations may declare support for units not listed by `getUnits`.
 Typically, the implementation would define additional units
 as conversions for the convenience of developers.

**参数**

- **unit** — the `TemporalUnit` for which to return the value

**返回**

- the long value of the unit

**异常**

- **DateTimeException** — if a value for the unit cannot be obtained
- **UnsupportedTemporalTypeException** — if the `unit` is not supported
