---
id: "java-en-function-chronounit-istimebased"
language: "java"
lang: "en"
category: "function"
name: "ChronoUnit.isTimeBased"
signature: "public boolean isTimeBased()"
title: "ChronoUnit.isTimeBased"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoUnit.isTimeBased

```java
public boolean isTimeBased()
```

Checks if this unit is a time unit.
 

 All units from nanos to half-days inclusive are time-based.
 Date-based units and `FOREVER` return false.

**返回**

- true if a time unit, false if a date unit
