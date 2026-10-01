---
id: "java-en-function-chronounit-isdatebased"
language: "java"
lang: "en"
category: "function"
name: "ChronoUnit.isDateBased"
signature: "public boolean isDateBased()"
title: "ChronoUnit.isDateBased"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoUnit.isDateBased

```java
public boolean isDateBased()
```

Checks if this unit is a date unit.
 

 All units from days to eras inclusive are date-based.
 Time-based units and `FOREVER` return false.

**返回**

- true if a date unit, false if a time unit
