---
id: "java-en-function-decimalformatsymbolsprovider-getinstance"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbolsProvider.getInstance"
signature: "public abstract DecimalFormatSymbols getInstance(Locale locale)"
title: "DecimalFormatSymbolsProvider.getInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/DecimalFormatSymbolsProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbolsProvider.getInstance

```java
public abstract DecimalFormatSymbols getInstance(Locale locale)
```

Returns a new `DecimalFormatSymbols` instance for the
 specified locale.

**参数**

- **locale** — the desired locale

**返回**

- a `DecimalFormatSymbols` instance.

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.DecimalFormatSymbols#getInstance(java.util.Locale)
