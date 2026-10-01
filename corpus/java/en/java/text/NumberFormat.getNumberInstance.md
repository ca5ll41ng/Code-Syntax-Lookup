---
id: "java-en-function-numberformat-getnumberinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getNumberInstance"
signature: "public static final NumberFormat getNumberInstance()"
title: "NumberFormat.getNumberInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getNumberInstance

```java
public static final NumberFormat getNumberInstance()
```

Returns a general-purpose number format for the current default
 `FORMAT FORMAT` locale.
 

This is equivalent to calling
 `getNumberInstance(Locale)
     getNumberInstance`.

**返回**

- the `NumberFormat` instance for general-purpose number formatting

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
