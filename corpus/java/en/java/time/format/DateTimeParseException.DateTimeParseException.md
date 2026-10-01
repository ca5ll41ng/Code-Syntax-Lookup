---
id: "java-en-function-datetimeparseexception-datetimeparseexception"
language: "java"
lang: "en"
category: "function"
name: "DateTimeParseException.DateTimeParseException"
signature: "public DateTimeParseException(String message, CharSequence parsedData, int errorIndex)"
title: "DateTimeParseException.DateTimeParseException"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeParseException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeParseException.DateTimeParseException

```java
public DateTimeParseException(String message, CharSequence parsedData, int errorIndex)
```

Constructs a new exception with the specified message.

**参数**

- **message** — the message to use for this exception, may be null
- **parsedData** — the parsed text, should not be null
- **errorIndex** — the index in the parsed string that was invalid, should be a valid index
