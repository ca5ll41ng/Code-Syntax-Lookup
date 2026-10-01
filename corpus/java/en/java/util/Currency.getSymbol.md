---
id: "java-en-function-currency-getsymbol"
language: "java"
lang: "en"
category: "function"
name: "Currency.getSymbol"
signature: "public String getSymbol()"
title: "Currency.getSymbol"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.getSymbol

```java
public String getSymbol()
```

Gets the symbol of this currency for the default
 `DISPLAY DISPLAY` locale.
 For example, for the US Dollar, the symbol is "$" if the default
 locale is the US, while for other locales it may be "US$". If no
 symbol can be determined, the ISO 4217 currency code is returned.
 

 If the default `DISPLAY DISPLAY` locale
 contains "rg" (region override)
 `#def_locale_extension Unicode extensions`,
 the symbol returned from this method reflects
 the value specified with that extension.

 This is equivalent to calling
 `getSymbol(Locale)
     getSymbol`.

**返回**

- the symbol of this currency for the default `DISPLAY DISPLAY` locale
