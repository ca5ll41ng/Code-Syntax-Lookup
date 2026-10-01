---
id: "java-en-function-currencynameprovider-getsymbol"
language: "java"
lang: "en"
category: "function"
name: "CurrencyNameProvider.getSymbol"
signature: "public abstract String getSymbol(String currencyCode, Locale locale)"
title: "CurrencyNameProvider.getSymbol"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CurrencyNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CurrencyNameProvider.getSymbol

```java
public abstract String getSymbol(String currencyCode, Locale locale)
```

Gets the symbol of the given currency code for the specified locale.
 For example, for "USD" (US Dollar), the symbol is "$" if the specified
 locale is the US, while for other locales it may be "US$". If no
 symbol can be determined, null should be returned.

**参数**

- **currencyCode** — the ISO 4217 currency code, which consists of three upper-case letters between 'A' (U+0041) and 'Z' (U+005A)
- **locale** — the desired locale

**返回**

- the symbol of the given currency code for the specified locale, or null if the symbol is not available for the locale

**异常**

- **NullPointerException** — if `currencyCode` or `locale` is null
- **IllegalArgumentException** — if `currencyCode` is not in the form of three upper-case letters, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.util.Currency#getSymbol(java.util.Locale)
