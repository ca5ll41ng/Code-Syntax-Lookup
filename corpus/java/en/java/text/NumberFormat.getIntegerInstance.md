---
id: "java-en-function-numberformat-getintegerinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getIntegerInstance"
signature: "public static final NumberFormat getIntegerInstance()"
title: "NumberFormat.getIntegerInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getIntegerInstance

```java
public static final NumberFormat getIntegerInstance()
```

Returns an integer number format for the current default
 `FORMAT FORMAT` locale. The
 returned number format is configured to round floating point numbers
 to the nearest integer using half-even rounding (see `HALF_EVEN RoundingMode.HALF_EVEN`) for formatting,
 and to parse only the integer part of an input string (see `isParseIntegerOnly isParseIntegerOnly`).
 

This is equivalent to calling
 `getIntegerInstance(Locale)
     getIntegerInstance`.

**返回**

- a number format for integer values

**参见**

- #getRoundingMode()
- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT

> *Since 1.4*
