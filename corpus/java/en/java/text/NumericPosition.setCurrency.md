---
id: "java-en-function-numericposition-setcurrency"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.setCurrency"
signature: "public void setCurrency(Currency currency)"
title: "NumericPosition.setCurrency"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.setCurrency

```java
public void setCurrency(Currency currency)
```

Sets the currency used by this number format when formatting
 currency values. This does not update the minimum or maximum
 number of fraction digits used by the number format.
 The currency is set by calling
 `setCurrency DecimalFormatSymbols.setCurrency`
 on this number format's symbols.

**参数**

- **currency** — the new currency to be used by this decimal format

**异常**

- **NullPointerException** — if `currency` is null

> *Since 1.4*
