---
id: "java-en-function-dateformat-setlenient"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.setLenient"
signature: "public void setLenient(boolean lenient)"
title: "DateFormat.setLenient"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.setLenient

```java
public void setLenient(boolean lenient)
```

Specify whether or not date/time parsing is to be lenient.  With
 lenient parsing, the parser may use heuristics to interpret inputs that
 do not precisely match this object's format.  With strict parsing,
 inputs must match this object's format.

 

This method is equivalent to the following call.
 {@snippet lang=java :
 getCalendar().setLenient(lenient);
 }

 

This leniency value is overwritten by a call to `setCalendar`.

 text will match any other `SPACE_SEPARATOR SPACE_SEPARATOR`s
 in the pattern with lenient parsing; otherwise, it will not match.

**参数**

- **lenient** — when `true`, parsing is lenient

**参见**

- java.util.Calendar#setLenient(boolean)
