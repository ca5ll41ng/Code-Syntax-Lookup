---
id: "java-en-function-currency-getdefaultfractiondigits"
language: "java"
lang: "en"
category: "function"
name: "Currency.getDefaultFractionDigits"
signature: "public int getDefaultFractionDigits()"
title: "Currency.getDefaultFractionDigits"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.getDefaultFractionDigits

```java
public int getDefaultFractionDigits()
```

Gets the default number of fraction digits used with this currency.
 Note that the number of fraction digits is the same as ISO 4217's
 minor unit for the currency.
 For example, the default number of fraction digits for the Euro is 2,
 while for the Japanese Yen it's 0.
 In the case of pseudo-currencies, such as IMF Special Drawing Rights,
 -1 is returned.

**返回**

- the default number of fraction digits used with this currency
