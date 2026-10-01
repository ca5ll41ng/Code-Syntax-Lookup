---
id: "java-en-function-chronoperiod-negated"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.negated"
signature: "default ChronoPeriod negated()"
title: "ChronoPeriod.negated"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.negated

```java
default ChronoPeriod negated()
```

Returns a new instance with each amount in this period negated.
 

 This returns a period with each supported unit individually negated.
 For example, a period of "2 years, -3 months and 4 days" will be
 negated to "-2 years, 3 months and -4 days".
 No normalization is performed.

**返回**

- a `ChronoPeriod` based on this period with the amounts negated, not null

**异常**

- **ArithmeticException** — if numeric overflow occurs, which only happens if one of the units has the value `Long.MIN_VALUE`
