---
id: "java-en-function-numberformatprovider-getpercentinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormatProvider.getPercentInstance"
signature: "public abstract NumberFormat getPercentInstance(Locale locale)"
title: "NumberFormatProvider.getPercentInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/NumberFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormatProvider.getPercentInstance

```java
public abstract NumberFormat getPercentInstance(Locale locale)
```

Returns a new `NumberFormat` instance which formats
 percentage values for the specified locale.

**参数**

- **locale** — the desired locale

**返回**

- a percent formatter

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.NumberFormat#getPercentInstance(java.util.Locale)
