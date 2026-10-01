---
id: "java-en-function-temporalfield-tostring"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.toString"
signature: "String toString()"
title: "TemporalField.toString"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.toString

```java
String toString()
```

Gets a descriptive name for the field.
 

 The should be of the format 'BaseOfRange', such as 'MonthOfYear',
 unless the field has a range of `FOREVER`, when only
 the base unit is mentioned, such as 'Year' or 'Era'.

**返回**

- the name of the field, not null
