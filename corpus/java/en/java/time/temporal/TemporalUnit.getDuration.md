---
id: "java-en-function-temporalunit-getduration"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.getDuration"
signature: "Duration getDuration()"
title: "TemporalUnit.getDuration"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.getDuration

```java
Duration getDuration()
```

Gets the duration of this unit, which may be an estimate.
 

 All units return a duration measured in standard nanoseconds from this method.
 The duration will be positive and non-zero.
 For example, an hour has a duration of `60 * 60 * 1,000,000,000ns`.
 

 Some units may return an accurate duration while others return an estimate.
 For example, days have an estimated duration due to the possibility of
 daylight saving time changes.
 To determine if the duration is an estimate, use `isDurationEstimated`.

**返回**

- the duration of this unit, which may be an estimate, not null
