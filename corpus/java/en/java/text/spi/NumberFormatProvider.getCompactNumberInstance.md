---
id: "java-en-function-numberformatprovider-getcompactnumberinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormatProvider.getCompactNumberInstance"
signature: "public NumberFormat getCompactNumberInstance(Locale locale, NumberFormat.Style formatStyle)"
title: "NumberFormatProvider.getCompactNumberInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/NumberFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormatProvider.getCompactNumberInstance

```java
public NumberFormat getCompactNumberInstance(Locale locale, NumberFormat.Style formatStyle)
```

Returns a new `NumberFormat` instance which formats
 a number in its compact form for the specified
 `locale` and `formatStyle`.

 `java.lang.UnsupportedOperationException
 UnsupportedOperationException`. Overriding the implementation
 of this method returns the compact number formatter instance
 of the given `locale` with specified `formatStyle`.

**参数**

- **locale** — the desired locale
- **formatStyle** — the style for formatting a number

**返回**

- a compact number formatter

**异常**

- **NullPointerException** — if `locale` or `formatStyle` is `null`
- **IllegalArgumentException** — if `locale` is not one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **UnsupportedOperationException** — if the implementation does not support this method

**参见**

- java.text.NumberFormat#getCompactNumberInstance(Locale, NumberFormat.Style)

> *Since 12*
