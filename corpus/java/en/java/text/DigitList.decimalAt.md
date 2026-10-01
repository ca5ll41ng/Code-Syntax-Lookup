---
id: "java-en-function-digitlist-decimalat"
language: "java"
lang: "en"
category: "function"
name: "DigitList.decimalAt"
signature: "public int decimalAt = 0"
title: "DigitList.decimalAt"
directive: "field"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DigitList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigitList.decimalAt

```java
public int decimalAt = 0
```

These data members are intentionally public and can be set directly.
 

 The value represented is given by placing the decimal point before
 digits[decimalAt].  If decimalAt is < 0, then leading zeros between
 the decimal point and the first nonzero digit are implied.  If decimalAt
 is > count, then trailing zeros between the digits[count-1] and the
 decimal point are implied.
 

 Equivalently, the represented value is given by f * 10^decimalAt.  Here
 f is a value 0.1 <= f < 1 arrived at by placing the digits in Digits to
 the right of the decimal.
 

 DigitList is normalized, so if it is non-zero, digits[0] is non-zero.  We
 don't allow denormalized numbers because our exponent is effectively of
 unlimited magnitude.  The count value contains the number of significant
 digits present in digits[].
 

 Zero is represented by any DigitList with count == 0 or with each digits[i]
 for all i <= count == '0'.
