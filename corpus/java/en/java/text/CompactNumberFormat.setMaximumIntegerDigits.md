---
id: "java-en-function-compactnumberformat-setmaximumintegerdigits"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.setMaximumIntegerDigits"
signature: "public void setMaximumIntegerDigits(int newValue)"
title: "CompactNumberFormat.setMaximumIntegerDigits"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.setMaximumIntegerDigits

```java
public void setMaximumIntegerDigits(int newValue)
```

{@inheritDoc NumberFormat}
 

The maximum allowed integer range is 309, if the `newValue` &gt;
 309, then the maximum integer digits count is set to 309.

**参数**

- **newValue** — the maximum number of integer digits to be shown.
