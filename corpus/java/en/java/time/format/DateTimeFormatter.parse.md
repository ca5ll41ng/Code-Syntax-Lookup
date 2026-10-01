---
id: "java-en-function-datetimeformatter-parse"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.parse"
signature: "public TemporalAccessor parse(CharSequence text)"
title: "DateTimeFormatter.parse"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.parse

```java
public TemporalAccessor parse(CharSequence text)
```

Fully parses the text producing a temporal object.
 

 This parses the entire text producing a temporal object.
 It is typically more useful to use `parse`.
 The result of this method is `TemporalAccessor` which has been resolved,
 applying basic validation checks to help ensure a valid date-time.
 

 If the parse completes without reading the entire length of the text,
 or a problem occurs during parsing or merging, then an exception is thrown.

**参数**

- **text** — the text to parse, not null

**返回**

- the parsed temporal object, not null

**异常**

- **DateTimeParseException** — if unable to parse the requested result
