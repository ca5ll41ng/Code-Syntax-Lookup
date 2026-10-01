---
id: "java-en-function-datetimeformatter-formatto"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.formatTo"
signature: "public void formatTo(TemporalAccessor temporal, Appendable appendable)"
title: "DateTimeFormatter.formatTo"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.formatTo

```java
public void formatTo(TemporalAccessor temporal, Appendable appendable)
```

Formats a date-time object to an `Appendable` using this formatter.
 

 This outputs the formatted date-time to the specified destination.
 `Appendable` is a general purpose interface that is implemented by all
 key character output classes including `StringBuffer`, `StringBuilder`,
 `PrintStream` and `Writer`.
 

 Although `Appendable` methods throw an `IOException`, this method does not.
 Instead, any `IOException` is wrapped in a runtime exception.

**参数**

- **temporal** — the temporal object to format, not null
- **appendable** — the appendable to format to, not null

**异常**

- **DateTimeException** — if an error occurs during formatting
