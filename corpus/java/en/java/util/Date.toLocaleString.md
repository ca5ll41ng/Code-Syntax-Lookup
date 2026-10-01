---
id: "java-en-function-date-tolocalestring"
language: "java"
lang: "en"
category: "function"
name: "Date.toLocaleString"
signature: "public String toLocaleString()"
title: "Date.toLocaleString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.toLocaleString

```java
public String toLocaleString()
```

Creates a string representation of this `Date` object in an
 implementation-dependent form. The intent is that the form should
 be familiar to the user of the Java application, wherever it may
 happen to be running. The intent is comparable to that of the
 "`%c`" format supported by the `strftime()`
 function of ISO&nbsp;C.

**返回**

- a string representation of this date, using the locale conventions.

**参见**

- java.text.DateFormat
- java.util.Date#toString()
- java.util.Date#toGMTString()

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `DateFormat.format(Date date)`.
