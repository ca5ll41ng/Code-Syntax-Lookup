---
id: "java-en-function-dateformat-getdatetimeinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.getDateTimeInstance"
signature: "public static final DateFormat getDateTimeInstance()"
title: "DateFormat.getDateTimeInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.getDateTimeInstance

```java
public static final DateFormat getDateTimeInstance()
```

Gets the date/time formatter with the default formatting style
 for the default `FORMAT FORMAT` locale.
 

This is equivalent to calling
 `getDateTimeInstance(int, int, Locale) getDateTimeInstance(DEFAULT,
     DEFAULT, Locale.getDefault`.

**返回**

- a date/time formatter.

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
