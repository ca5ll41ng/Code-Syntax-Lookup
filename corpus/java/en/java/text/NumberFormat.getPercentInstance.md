---
id: "java-en-function-numberformat-getpercentinstance"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getPercentInstance"
signature: "public static final NumberFormat getPercentInstance()"
title: "NumberFormat.getPercentInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getPercentInstance

```java
public static final NumberFormat getPercentInstance()
```

Returns a percentage format for the current default
 `FORMAT FORMAT` locale.
 

This is equivalent to calling
 `getPercentInstance(Locale)
     getPercentInstance`.

**返回**

- the `NumberFormat` instance for percentage formatting

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
