---
id: "java-en-function-valuerange-checkvalidintvalue"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.checkValidIntValue"
signature: "public int checkValidIntValue(long value, TemporalField field)"
title: "ValueRange.checkValidIntValue"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.checkValidIntValue

```java
public int checkValidIntValue(long value, TemporalField field)
```

Checks that the specified value is valid and fits in an `int`.
 

 This validates that the value is within the valid range of values and that
 all valid values are within the bounds of an `int`.
 The field is only used to improve the error message.

**参数**

- **value** — the value to check
- **field** — the field being checked, may be null

**返回**

- the value that was passed in

**参见**

- #isValidIntValue(long)
