---
id: "java-en-function-datetimeformatter-format"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.format"
signature: "public String format(TemporalAccessor temporal)"
title: "DateTimeFormatter.format"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.format

```java
public String format(TemporalAccessor temporal)
```

Formats a date-time object using this formatter.
 

 This formats the date-time to a String using the rules of the formatter.

**参数**

- **temporal** — the temporal object to format, not null

**返回**

- the formatted string, not null

**异常**

- **DateTimeException** — if an error occurs during formatting
