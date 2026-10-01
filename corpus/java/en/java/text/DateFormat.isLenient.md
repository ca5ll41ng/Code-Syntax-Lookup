---
id: "java-en-function-dateformat-islenient"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.isLenient"
signature: "public boolean isLenient()"
title: "DateFormat.isLenient"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.isLenient

```java
public boolean isLenient()
```

Tell whether date/time parsing is to be lenient.
 This method is equivalent to the following call.
 {@snippet lang=java :
 getCalendar().isLenient();
 }

**返回**

- `true` if the `calendar` is lenient; `false` otherwise.

**参见**

- java.util.Calendar#isLenient()
