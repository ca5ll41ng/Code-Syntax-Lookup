---
id: "java-en-function-chronounit-isdurationestimated"
language: "java"
lang: "en"
category: "function"
name: "ChronoUnit.isDurationEstimated"
signature: "public boolean isDurationEstimated()"
title: "ChronoUnit.isDurationEstimated"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoUnit.isDurationEstimated

```java
public boolean isDurationEstimated()
```

Checks if the duration of the unit is an estimate.
 

 All time units in this class are considered to be accurate, while all date
 units in this class are considered to be estimated.
 

 This definition ignores leap seconds, but considers that Days vary due to
 daylight saving time and months have different lengths.

**返回**

- true if the duration is estimated, false if accurate
