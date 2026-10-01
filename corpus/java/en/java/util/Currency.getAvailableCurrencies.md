---
id: "java-en-function-currency-getavailablecurrencies"
language: "java"
lang: "en"
category: "function"
name: "Currency.getAvailableCurrencies"
signature: "public static Set<Currency> getAvailableCurrencies()"
title: "Currency.getAvailableCurrencies"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.getAvailableCurrencies

```java
public static Set<Currency> getAvailableCurrencies()
```

{@return a set of available currencies} The returned set of currencies
 contains all the available currencies, which may include currencies
 that represent obsolete ISO 4217 codes. If there is no currency available
 in the runtime, the returned set is empty. The set can be modified
 without affecting the available currencies in the runtime.

 a stream of the available currencies.

**参见**

- #availableCurrencies()

> *Since 1.7*
