---
id: "java-en-function-temporalunit-isdurationestimated"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.isDurationEstimated"
signature: "boolean isDurationEstimated()"
title: "TemporalUnit.isDurationEstimated"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.isDurationEstimated

```java
boolean isDurationEstimated()
```

Checks if the duration of the unit is an estimate.
 

 All units have a duration, however the duration is not always accurate.
 For example, days have an estimated duration due to the possibility of
 daylight saving time changes.
 This method returns true if the duration is an estimate and false if it is
 accurate. Note that accurate/estimated ignores leap seconds.

**返回**

- true if the duration is estimated, false if accurate
