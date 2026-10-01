---
id: "java-en-function-decimalformatsymbols-setcurrency"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.setCurrency"
signature: "public void setCurrency(Currency currency)"
title: "DecimalFormatSymbols.setCurrency"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.setCurrency

```java
public void setCurrency(Currency currency)
```

Sets the currency of this `DecimalFormatSymbols`.
 This also sets the currency symbol attribute to the currency's symbol
 in the DecimalFormatSymbols' locale, and the international currency
 symbol attribute to the currency's ISO 4217 currency code.

**参数**

- **currency** — the new currency to be used

**异常**

- **NullPointerException** — if `currency` is null

**参见**

- #setCurrencySymbol
- #setInternationalCurrencySymbol

> *Since 1.4*
