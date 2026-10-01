---
id: "java-en-function-chronofield-checkvalidvalue"
language: "java"
lang: "en"
category: "function"
name: "ChronoField.checkValidValue"
signature: "public long checkValidValue(long value)"
title: "ChronoField.checkValidValue"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoField.checkValidValue

```java
public long checkValidValue(long value)
```

Checks that the specified value is valid for this field.
 

 This validates that the value is within the outer range of valid values
 returned by `range`.
 

 This method checks against the range of the field in the ISO-8601 calendar system.
 This range may be incorrect for other calendar systems.
 Use `range` to access the correct range
 for a different calendar system.

**参数**

- **value** — the value to check

**返回**

- the value that was passed in
