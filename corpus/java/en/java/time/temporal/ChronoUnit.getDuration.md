---
id: "java-en-function-chronounit-getduration"
language: "java"
lang: "en"
category: "function"
name: "ChronoUnit.getDuration"
signature: "public Duration getDuration()"
title: "ChronoUnit.getDuration"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoUnit.getDuration

```java
public Duration getDuration()
```

Gets the estimated duration of this unit in the ISO calendar system.
 

 All of the units in this class have an estimated duration.
 Days vary due to daylight saving time, while months have different lengths.

**返回**

- the estimated duration of this unit, not null
