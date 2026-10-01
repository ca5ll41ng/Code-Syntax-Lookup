---
id: "java-en-function-datetimeformatterbuilder-toformatter"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.toFormatter"
signature: "public DateTimeFormatter toFormatter()"
title: "DateTimeFormatterBuilder.toFormatter"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.toFormatter

```java
public DateTimeFormatter toFormatter()
```

Completes this builder by creating the `DateTimeFormatter`
 using the default locale.
 

 This will create a formatter with the `getDefault(Locale.Category) default FORMAT locale`.
 Numbers will be printed and parsed using the standard DecimalStyle.
 The resolver style will be `SMART SMART`.
 

 Calling this method will end any open optional sections by repeatedly
 calling `optionalEnd` before creating the formatter.
 

 This builder can still be used after creating the formatter if desired,
 although the state may have been changed by calls to `optionalEnd`.

**返回**

- the created formatter, not null
