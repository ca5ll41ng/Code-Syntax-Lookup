---
id: "java-en-function-temporalfield-getrangeunit"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.getRangeUnit"
signature: "TemporalUnit getRangeUnit()"
title: "TemporalField.getRangeUnit"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.getRangeUnit

```java
TemporalUnit getRangeUnit()
```

Gets the range that the field is bound by.
 

 The range of the field is the period that the field varies within.
 For example, in the field 'MonthOfYear', the range is 'Years'.
 See also `getBaseUnit`.
 

 The range is never null. For example, the 'Year' field is shorthand for
 'YearOfForever'. It therefore has a unit of 'Years' and a range of 'Forever'.

**返回**

- the unit defining the range of the field, not null
