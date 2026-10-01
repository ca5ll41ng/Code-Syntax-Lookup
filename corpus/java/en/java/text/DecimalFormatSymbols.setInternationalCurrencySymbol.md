---
id: "java-en-function-decimalformatsymbols-setinternationalcurrencysymbol"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.setInternationalCurrencySymbol"
signature: "public void setInternationalCurrencySymbol(String currencyCode)"
title: "DecimalFormatSymbols.setInternationalCurrencySymbol"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.setInternationalCurrencySymbol

```java
public void setInternationalCurrencySymbol(String currencyCode)
```

Sets the ISO 4217 currency code of the currency of these
 DecimalFormatSymbols.
 If the currency code is valid (as defined by
 `getInstance(java.lang.String) Currency.getInstance`),
 this also sets the currency attribute to the corresponding Currency
 instance and the currency symbol attribute to the currency's symbol
 in the DecimalFormatSymbols' locale. If the currency code is not valid,
 then the currency attribute and the currency symbol attribute are not modified.

**参数**

- **currencyCode** — the currency code

**异常**

- **NullPointerException** — if `currencyCode` is `null`

**参见**

- #setCurrency
- #setCurrencySymbol

> *Since 1.2*
