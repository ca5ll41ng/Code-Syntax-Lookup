---
id: "java-en-function-compactnumberformat-setmaximumfractiondigits"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.setMaximumFractionDigits"
signature: "public void setMaximumFractionDigits(int newValue)"
title: "CompactNumberFormat.setMaximumFractionDigits"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.setMaximumFractionDigits

```java
public void setMaximumFractionDigits(int newValue)
```

{@inheritDoc NumberFormat}
 

The maximum allowed fraction range is 340, if the `newValue` &gt;
 340, then the maximum fraction digits count is set to 340.

**参数**

- **newValue** — the maximum number of fraction digits to be shown.
