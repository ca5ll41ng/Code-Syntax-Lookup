---
id: "java-en-function-numberformat-getcurrencyinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getCurrencyInstance"
signature: "public static final NumberFormat getCurrencyInstance()"
title: "NumberFormat.getCurrencyInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getCurrencyInstance

```java
public static final NumberFormat getCurrencyInstance()
```

Returns a currency format for the current default
 `FORMAT FORMAT` locale.
 

This is equivalent to calling
 `getCurrencyInstance(Locale)
     getCurrencyInstance`.

**返回**

- the `NumberFormat` instance for currency formatting

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
