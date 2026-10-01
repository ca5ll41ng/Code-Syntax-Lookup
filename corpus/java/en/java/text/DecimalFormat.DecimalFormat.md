---
id: "java-en-function-decimalformat-decimalformat"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormat.DecimalFormat"
signature: "public DecimalFormat()"
title: "DecimalFormat.DecimalFormat"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormat.DecimalFormat

```java
public DecimalFormat()
```

Creates a DecimalFormat using the default pattern and symbols
 for the default `FORMAT FORMAT` locale.
 This is a convenient way to obtain a
 DecimalFormat when internationalization is not the main concern.

 `NumberFormat` factory methods such as `getNumberInstance`. These factories will return the most
 appropriate subclass of NumberFormat for a given locale.

**参见**

- NumberFormat#getInstance(Locale)
- NumberFormat#getNumberInstance(Locale)
- NumberFormat#getCurrencyInstance(Locale)
- NumberFormat#getPercentInstance(Locale)
