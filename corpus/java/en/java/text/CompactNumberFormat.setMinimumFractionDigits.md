---
id: "java-en-function-compactnumberformat-setminimumfractiondigits"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.setMinimumFractionDigits"
signature: "public void setMinimumFractionDigits(int newValue)"
title: "CompactNumberFormat.setMinimumFractionDigits"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.setMinimumFractionDigits

```java
public void setMinimumFractionDigits(int newValue)
```

{@inheritDoc NumberFormat}
 

The maximum allowed fraction range is 340, if the `newValue` &gt;
 340, then the minimum fraction digits count is set to 340.

**参数**

- **newValue** — the minimum number of fraction digits to be shown.
