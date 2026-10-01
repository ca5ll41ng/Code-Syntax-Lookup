---
id: "java-en-function-temporalfield-isdatebased"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.isDateBased"
signature: "boolean isDateBased()"
title: "TemporalField.isDateBased"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.isDateBased

```java
boolean isDateBased()
```

Checks if this field represents a component of a date.
 

 A field is date-based if it can be derived from
 `EPOCH_DAY EPOCH_DAY`.
 Note that it is valid for both `isDateBased()` and `isTimeBased()`
 to return false, such as when representing a field like minute-of-week.

**返回**

- true if this field is a component of a date
