---
id: "java-en-function-temporalunit-istimebased"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.isTimeBased"
signature: "boolean isTimeBased()"
title: "TemporalUnit.isTimeBased"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.isTimeBased

```java
boolean isTimeBased()
```

Checks if this unit represents a component of a time.
 

 A unit is time-based if it can be used to imply meaning from a time.
 It must have a `getDuration() duration` that divides into
 the length of a standard day without remainder.
 Note that it is valid for both `isDateBased()` and `isTimeBased()`
 to return false, such as when representing a unit like 36 hours.

**返回**

- true if this unit is a component of a time
