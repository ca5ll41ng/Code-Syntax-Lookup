---
id: "java-en-function-numberformatprovider-getcurrencyinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormatProvider.getCurrencyInstance"
signature: "public abstract NumberFormat getCurrencyInstance(Locale locale)"
title: "NumberFormatProvider.getCurrencyInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/NumberFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormatProvider.getCurrencyInstance

```java
public abstract NumberFormat getCurrencyInstance(Locale locale)
```

Returns a new `NumberFormat` instance which formats
 monetary values for the specified locale.

**参数**

- **locale** — the desired locale.

**返回**

- a currency formatter

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.NumberFormat#getCurrencyInstance(java.util.Locale)
