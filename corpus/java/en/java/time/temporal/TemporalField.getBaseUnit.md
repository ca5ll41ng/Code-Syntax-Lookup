---
id: "java-en-function-temporalfield-getbaseunit"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.getBaseUnit"
signature: "TemporalUnit getBaseUnit()"
title: "TemporalField.getBaseUnit"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.getBaseUnit

```java
TemporalUnit getBaseUnit()
```

Gets the unit that the field is measured in.
 

 The unit of the field is the period that varies within the range.
 For example, in the field 'MonthOfYear', the unit is 'Months'.
 See also `getRangeUnit`.

**返回**

- the unit defining the base unit of the field, not null
