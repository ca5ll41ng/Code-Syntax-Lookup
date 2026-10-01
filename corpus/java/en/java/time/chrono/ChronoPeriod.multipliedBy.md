---
id: "java-en-function-chronoperiod-multipliedby"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.multipliedBy"
signature: "ChronoPeriod multipliedBy(int scalar)"
title: "ChronoPeriod.multipliedBy"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.multipliedBy

```java
ChronoPeriod multipliedBy(int scalar)
```

Returns a new instance with each amount in this period in this period
 multiplied by the specified scalar.
 

 This returns a period with each supported unit individually multiplied.
 For example, a period of "2 years, -3 months and 4 days" multiplied by
 3 will return "6 years, -9 months and 12 days".
 No normalization is performed.

**参数**

- **scalar** — the scalar to multiply by, not null

**返回**

- a `ChronoPeriod` based on this period with the amounts multiplied by the scalar, not null

**异常**

- **ArithmeticException** — if numeric overflow occurs
