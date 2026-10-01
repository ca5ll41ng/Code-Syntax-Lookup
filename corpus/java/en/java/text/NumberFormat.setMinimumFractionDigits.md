---
id: "java-en-function-numberformat-setminimumfractiondigits"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.setMinimumFractionDigits"
signature: "public void setMinimumFractionDigits(int newValue)"
title: "NumberFormat.setMinimumFractionDigits"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.setMinimumFractionDigits

```java
public void setMinimumFractionDigits(int newValue)
```

Sets the minimum number of digits allowed in the fraction portion of a
 number during formatting. `minimumFractionDigits` must be &le;
 `maximumFractionDigits`. If the new value for `minimumFractionDigits` exceeds the current value of `maximumFractionDigits`, then `maximumFractionDigits` will also be
 set to the new value. Negative input values are replaced with 0.

**参数**

- **newValue** — the minimum number of fraction digits to be shown. The concrete subclass may enforce an upper limit to this value appropriate to the numeric type being formatted.

**参见**

- #getMinimumFractionDigits
