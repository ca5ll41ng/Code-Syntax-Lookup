---
id: "java-en-function-currency-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Currency.getInstance"
signature: "public static Currency getInstance(String currencyCode)"
title: "Currency.getInstance"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.getInstance

```java
public static Currency getInstance(String currencyCode)
```

Returns the `Currency` instance for the given currency code.

**参数**

- **currencyCode** — the ISO 4217 code of the currency

**返回**

- the `Currency` instance for the given currency code

**异常**

- **NullPointerException** — if `currencyCode` is null
- **IllegalArgumentException** — if `currencyCode` is not a supported ISO 4217 code.
