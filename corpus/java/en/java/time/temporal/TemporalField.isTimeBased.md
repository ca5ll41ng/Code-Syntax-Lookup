---
id: "java-en-function-temporalfield-istimebased"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.isTimeBased"
signature: "boolean isTimeBased()"
title: "TemporalField.isTimeBased"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.isTimeBased

```java
boolean isTimeBased()
```

Checks if this field represents a component of a time.
 

 A field is time-based if it can be derived from
 `NANO_OF_DAY NANO_OF_DAY`.
 Note that it is valid for both `isDateBased()` and `isTimeBased()`
 to return false, such as when representing a field like minute-of-week.

**返回**

- true if this field is a component of a time
