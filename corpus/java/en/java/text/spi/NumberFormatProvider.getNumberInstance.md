---
id: "java-en-function-numberformatprovider-getnumberinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormatProvider.getNumberInstance"
signature: "public abstract NumberFormat getNumberInstance(Locale locale)"
title: "NumberFormatProvider.getNumberInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/NumberFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormatProvider.getNumberInstance

```java
public abstract NumberFormat getNumberInstance(Locale locale)
```

Returns a new general-purpose `NumberFormat` instance for
 the specified locale.

**参数**

- **locale** — the desired locale

**返回**

- a general-purpose number formatter

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.NumberFormat#getNumberInstance(java.util.Locale)
