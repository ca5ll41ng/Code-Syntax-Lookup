---
id: "java-en-function-dateformat-getdateinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.getDateInstance"
signature: "public static final DateFormat getDateInstance()"
title: "DateFormat.getDateInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.getDateInstance

```java
public static final DateFormat getDateInstance()
```

Gets the date formatter with the default formatting style
 for the default `FORMAT FORMAT` locale.
 

This is equivalent to calling
 `getDateInstance(int, Locale) getDateInstance(DEFAULT,
     Locale.getDefault`.

**返回**

- a date formatter.

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
