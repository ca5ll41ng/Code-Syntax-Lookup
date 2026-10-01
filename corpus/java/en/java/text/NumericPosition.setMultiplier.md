---
id: "java-en-function-numericposition-setmultiplier"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.setMultiplier"
signature: "public void setMultiplier (int newValue)"
title: "NumericPosition.setMultiplier"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.setMultiplier

```java
public void setMultiplier (int newValue)
```

Sets the multiplier for use in percent, per mille, and similar
 formats.
 For a percent format, set the multiplier to 100 and the suffixes to
 have '%' (for Arabic, use the Arabic percent sign).
 For a per mille format, set the multiplier to 1000 and the suffixes to
 have '`U+2030`'.

 

Example: with multiplier 100, 1.23 is formatted as "123", and
 "123" is parsed into 1.23. If `isParseIntegerOnly()` returns `true`,
 "123" is parsed into 1.

**参数**

- **newValue** — the new multiplier

**参见**

- #getMultiplier
