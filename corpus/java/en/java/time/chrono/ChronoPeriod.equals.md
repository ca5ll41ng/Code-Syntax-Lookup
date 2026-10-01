---
id: "java-en-function-chronoperiod-equals"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.equals"
signature: "boolean equals(Object obj)"
title: "ChronoPeriod.equals"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.equals

```java
boolean equals(Object obj)
```

Checks if this period is equal to another period, including the chronology.
 

 Compares this period with another ensuring that the type, each amount and
 the chronology are the same.
 Note that this means that a period of "15 Months" is not equal to a period
 of "1 Year and 3 Months".

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other period
