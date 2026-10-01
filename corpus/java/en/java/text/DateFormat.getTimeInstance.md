---
id: "java-en-function-dateformat-gettimeinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.getTimeInstance"
signature: "public static final DateFormat getTimeInstance()"
title: "DateFormat.getTimeInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.getTimeInstance

```java
public static final DateFormat getTimeInstance()
```

Gets the time formatter with the default formatting style
 for the default `FORMAT FORMAT` locale.
 

This is equivalent to calling
 `getTimeInstance(int, Locale) getTimeInstance(DEFAULT,
     Locale.getDefault`.

**返回**

- a time formatter.

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
