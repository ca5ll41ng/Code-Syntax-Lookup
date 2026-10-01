---
id: "java-en-function-dateformatsymbolsprovider-getinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbolsProvider.getInstance"
signature: "public abstract DateFormatSymbols getInstance(Locale locale)"
title: "DateFormatSymbolsProvider.getInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/DateFormatSymbolsProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbolsProvider.getInstance

```java
public abstract DateFormatSymbols getInstance(Locale locale)
```

Returns a new `DateFormatSymbols` instance for the
 specified locale.

**参数**

- **locale** — the desired locale

**返回**

- a `DateFormatSymbols` instance.

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.DateFormatSymbols#getInstance(java.util.Locale)
