---
id: "java-en-function-decimalformatsymbols-setcurrencysymbol"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.setCurrencySymbol"
signature: "public void setCurrencySymbol(String currency)"
title: "DecimalFormatSymbols.setCurrencySymbol"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.setCurrencySymbol

```java
public void setCurrencySymbol(String currency)
```

Sets the currency symbol for the currency of this
 `DecimalFormatSymbols` in their locale. Unlike `setInternationalCurrencySymbol`, this method does not update
 the currency attribute nor the international currency symbol attribute.

**参数**

- **currency** — the currency symbol

**异常**

- **NullPointerException** — if `currency` is `null`

> *Since 1.2*
