---
id: "java-en-function-temporalfield-range"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.range"
signature: "ValueRange range()"
title: "TemporalField.range"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.range

```java
ValueRange range()
```

Gets the range of valid values for the field.
 

 All fields can be expressed as a `long` integer.
 This method returns an object that describes the valid range for that value.
 This method is generally only applicable to the ISO-8601 calendar system.
 

 Note that the result only describes the minimum and maximum valid values
 and it is important not to read too much into them. For example, there
 could be values within the range that are invalid for the field.

**返回**

- the range of valid values for the field, not null
