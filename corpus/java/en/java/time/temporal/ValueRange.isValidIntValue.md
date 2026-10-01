---
id: "java-en-function-valuerange-isvalidintvalue"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.isValidIntValue"
signature: "public boolean isValidIntValue(long value)"
title: "ValueRange.isValidIntValue"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.isValidIntValue

```java
public boolean isValidIntValue(long value)
```

Checks if the value is within the valid range and that all values
 in the range fit in an `int`.
 

 This method combines `isIntValue` and `isValidValue`.

**参数**

- **value** — the value to check

**返回**

- true if the value is valid and fits in an `int`
