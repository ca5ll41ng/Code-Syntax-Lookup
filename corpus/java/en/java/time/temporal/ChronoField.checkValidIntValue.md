---
id: "java-en-function-chronofield-checkvalidintvalue"
language: "java"
lang: "en"
category: "function"
name: "ChronoField.checkValidIntValue"
signature: "public int checkValidIntValue(long value)"
title: "ChronoField.checkValidIntValue"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoField.checkValidIntValue

```java
public int checkValidIntValue(long value)
```

Checks that the specified value is valid and fits in an `int`.
 

 This validates that the value is within the outer range of valid values
 returned by `range`.
 It also checks that all valid values are within the bounds of an `int`.
 

 This method checks against the range of the field in the ISO-8601 calendar system.
 This range may be incorrect for other calendar systems.
 Use `range` to access the correct range
 for a different calendar system.

**参数**

- **value** — the value to check

**返回**

- the value that was passed in
