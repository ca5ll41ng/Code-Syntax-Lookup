---
id: "java-en-function-datetimeformatterbuilder-appendoffsetid"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendOffsetId"
signature: "public DateTimeFormatterBuilder appendOffsetId()"
title: "DateTimeFormatterBuilder.appendOffsetId"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendOffsetId

```java
public DateTimeFormatterBuilder appendOffsetId()
```

Appends the zone offset, such as '+01:00', to the formatter.
 

 This appends an instruction to format/parse the offset ID to the builder.
 This is equivalent to calling `appendOffset("+HH:MM:ss", "Z")`.
 See `appendOffset` for details on formatting
 and parsing.

**返回**

- this, for chaining, not null
