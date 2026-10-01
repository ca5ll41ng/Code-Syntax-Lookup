---
id: "java-en-function-chronoperiod-normalized"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.normalized"
signature: "ChronoPeriod normalized()"
title: "ChronoPeriod.normalized"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.normalized

```java
ChronoPeriod normalized()
```

Returns a copy of this period with the amounts of each unit normalized.
 

 The process of normalization is specific to each calendar system.
 For example, in the ISO calendar system, the years and months are
 normalized but the days are not, such that "15 months" would be
 normalized to "1 year and 3 months".
 

 This instance is immutable and unaffected by this method call.

**返回**

- a `ChronoPeriod` based on this period with the amounts of each unit normalized, not null

**异常**

- **ArithmeticException** — if numeric overflow occurs
