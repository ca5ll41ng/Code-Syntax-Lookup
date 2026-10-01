---
id: "java-en-function-numberformat-setminimumintegerdigits"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.setMinimumIntegerDigits"
signature: "public void setMinimumIntegerDigits(int newValue)"
title: "NumberFormat.setMinimumIntegerDigits"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.setMinimumIntegerDigits

```java
public void setMinimumIntegerDigits(int newValue)
```

Sets the minimum number of digits allowed in the integer portion of a
 number during formatting. `minimumIntegerDigits` must be &le;
 `maximumIntegerDigits`. If the new value for `minimumIntegerDigits`
 exceeds the current value of `maximumIntegerDigits`, then `maximumIntegerDigits` will also be set to the new value. Negative input
 values are replaced with 0.

**参数**

- **newValue** — the minimum number of integer digits to be shown. The concrete subclass may enforce an upper limit to this value appropriate to the numeric type being formatted.

**参见**

- #getMinimumIntegerDigits
