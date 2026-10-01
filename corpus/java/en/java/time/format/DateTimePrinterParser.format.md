---
id: "java-en-function-datetimeprinterparser-format"
language: "java"
lang: "en"
category: "function"
name: "DateTimePrinterParser.format"
signature: "boolean format(DateTimePrintContext context, StringBuilder buf, boolean optional)"
title: "DateTimePrinterParser.format"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimePrinterParser.format

```java
boolean format(DateTimePrintContext context, StringBuilder buf, boolean optional)
```

Prints the date-time object to the buffer.
 

 The context holds information to use during the format.
 It also contains the date-time information to be printed.
 

 The buffer must not be mutated beyond the content controlled by the implementation.

**参数**

- **context** — the context to format using, not null
- **buf** — the buffer to append to, not null
- **optional** — whether the enclosing formatter is optional. If true and this formatter is nested in an optional formatter and the data is not available, then no error is returned and nothing is appended to the buffer. If false and the data is not available then an exception is thrown or false is returned as appropriate.

**返回**

- false if unable to query the value from the date-time, true otherwise

**异常**

- **DateTimeException** — if the date-time cannot be printed successfully
