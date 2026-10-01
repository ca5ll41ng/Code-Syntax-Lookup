---
id: "java-en-function-datetimeprinterparser-parse"
language: "java"
lang: "en"
category: "function"
name: "DateTimePrinterParser.parse"
signature: "int parse(DateTimeParseContext context, CharSequence text, int position)"
title: "DateTimePrinterParser.parse"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimePrinterParser.parse

```java
int parse(DateTimeParseContext context, CharSequence text, int position)
```

Parses text into date-time information.
 

 The context holds information to use during the parse.
 It is also used to store the parsed date-time information.

**参数**

- **context** — the context to use and parse into, not null
- **text** — the input text to parse, not null
- **position** — the position to start parsing at, from 0 to the text length

**返回**

- the new parse position, where negative means an error with the error position encoded using the complement ~ operator

**异常**

- **NullPointerException** — if the context or text is null
- **IndexOutOfBoundsException** — if the position is invalid
