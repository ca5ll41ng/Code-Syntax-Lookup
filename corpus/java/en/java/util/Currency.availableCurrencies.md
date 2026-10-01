---
id: "java-en-function-currency-availablecurrencies"
language: "java"
lang: "en"
category: "function"
name: "Currency.availableCurrencies"
signature: "public static Stream<Currency> availableCurrencies()"
title: "Currency.availableCurrencies"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.availableCurrencies

```java
public static Stream<Currency> availableCurrencies()
```

{@return a stream of available currencies} The returned stream of currencies
 contains all the available currencies, which may include currencies
 that represent obsolete ISO 4217 codes. If there is no currency
 available in the runtime, the returned stream is empty.

 not create a defensive copy of the `Currency` set.

**参见**

- #getAvailableCurrencies()

> *Since 25*
