---
id: "java-en-function-chronology-range"
language: "java"
lang: "en"
category: "function"
name: "Chronology.range"
signature: "ValueRange range(ChronoField field)"
title: "Chronology.range"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.range

```java
ValueRange range(ChronoField field)
```

Gets the range of valid values for the specified field.
 

 All fields can be expressed as a `long` integer.
 This method returns an object that describes the valid range for that value.
 

 Note that the result only describes the minimum and maximum valid values
 and it is important not to read too much into them. For example, there
 could be values within the range that are invalid for the field.
 

 This method will return a result whether or not the chronology supports the field.

**参数**

- **field** — the field to get the range for, not null

**返回**

- the range of valid values for the field, not null

**异常**

- **DateTimeException** — if the range for the field cannot be obtained
