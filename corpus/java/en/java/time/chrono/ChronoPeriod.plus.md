---
id: "java-en-function-chronoperiod-plus"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.plus"
signature: "ChronoPeriod plus(TemporalAmount amountToAdd)"
title: "ChronoPeriod.plus"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.plus

```java
ChronoPeriod plus(TemporalAmount amountToAdd)
```

Returns a copy of this period with the specified period added.
 

 If the specified amount is a `ChronoPeriod` then it must have
 the same chronology as this period. Implementations may choose to
 accept or reject other `TemporalAmount` implementations.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **amountToAdd** — the period to add, not null

**返回**

- a `ChronoPeriod` based on this period with the requested period added, not null

**异常**

- **ArithmeticException** — if numeric overflow occurs
