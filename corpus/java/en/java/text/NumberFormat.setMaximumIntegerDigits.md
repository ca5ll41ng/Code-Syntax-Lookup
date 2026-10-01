---
id: "java-en-function-numberformat-setmaximumintegerdigits"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.setMaximumIntegerDigits"
signature: "public void setMaximumIntegerDigits(int newValue)"
title: "NumberFormat.setMaximumIntegerDigits"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.setMaximumIntegerDigits

```java
public void setMaximumIntegerDigits(int newValue)
```

Sets the maximum number of digits allowed in the integer portion of a
 number during formatting. `maximumIntegerDigits` must be &ge;
 `minimumIntegerDigits`. If the new value for `maximumIntegerDigits` is less than the current value of
 `minimumIntegerDigits`, then `minimumIntegerDigits` will
 also be set to the new value. Negative input values are replaced with 0.

**参数**

- **newValue** — the maximum number of integer digits to be shown. The concrete subclass may enforce an upper limit to this value appropriate to the numeric type being formatted.

**参见**

- #getMaximumIntegerDigits
