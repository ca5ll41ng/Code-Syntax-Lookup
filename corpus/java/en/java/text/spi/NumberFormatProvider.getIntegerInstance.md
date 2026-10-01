---
id: "java-en-function-numberformatprovider-getintegerinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormatProvider.getIntegerInstance"
signature: "public abstract NumberFormat getIntegerInstance(Locale locale)"
title: "NumberFormatProvider.getIntegerInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/NumberFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormatProvider.getIntegerInstance

```java
public abstract NumberFormat getIntegerInstance(Locale locale)
```

Returns a new `NumberFormat` instance which formats
 integer values for the specified locale.
 The returned number format is configured to
 round floating point numbers to the nearest integer using
 half-even rounding (see `HALF_EVEN HALF_EVEN`)
 for formatting, and to parse only the integer part of
 an input string (see `isParseIntegerOnly isParseIntegerOnly`).

**参数**

- **locale** — the desired locale

**返回**

- a number format for integer values

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.NumberFormat#getIntegerInstance(java.util.Locale)
