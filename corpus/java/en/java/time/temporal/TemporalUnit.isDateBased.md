---
id: "java-en-function-temporalunit-isdatebased"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.isDateBased"
signature: "boolean isDateBased()"
title: "TemporalUnit.isDateBased"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.isDateBased

```java
boolean isDateBased()
```

Checks if this unit represents a component of a date.
 

 A date is time-based if it can be used to imply meaning from a date.
 It must have a `getDuration() duration` that is an integral
 multiple of the length of a standard day.
 Note that it is valid for both `isDateBased()` and `isTimeBased()`
 to return false, such as when representing a unit like 36 hours.

**返回**

- true if this unit is a component of a date
