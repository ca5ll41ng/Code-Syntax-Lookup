---
id: "java-en-function-valuerange-checkvalidvalue"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.checkValidValue"
signature: "public long checkValidValue(long value, TemporalField field)"
title: "ValueRange.checkValidValue"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.checkValidValue

```java
public long checkValidValue(long value, TemporalField field)
```

Checks that the specified value is valid.
 

 This validates that the value is within the valid range of values.
 The field is only used to improve the error message.

**参数**

- **value** — the value to check
- **field** — the field being checked, may be null

**返回**

- the value that was passed in

**参见**

- #isValidValue(long)
