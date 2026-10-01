---
id: "java-en-function-currency-getnumericcodeasstring"
language: "java"
lang: "en"
category: "function"
name: "Currency.getNumericCodeAsString"
signature: "public String getNumericCodeAsString()"
title: "Currency.getNumericCodeAsString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.getNumericCodeAsString

```java
public String getNumericCodeAsString()
```

Returns the 3 digit ISO 4217 numeric code of this currency as a `String`.
 Unlike `getNumericCode`, which returns the numeric code as `int`,
 this method always returns the numeric code as a 3 digit string.
 e.g. a numeric value of 32 would be returned as "032",
 and a numeric value of 6 would be returned as "006".

**返回**

- the 3 digit ISO 4217 numeric code of this currency as a `String`

> *Since 9*
