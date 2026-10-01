---
id: "java-en-function-datetimeformatter-toformat"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.toFormat"
signature: "public Format toFormat()"
title: "DateTimeFormatter.toFormat"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.toFormat

```java
public Format toFormat()
```

Returns this formatter as a `java.text.Format` instance.
 

 The returned `Format` instance will format any `TemporalAccessor`
 and parses to a resolved `TemporalAccessor`.
 

 Exceptions will follow the definitions of `Format`, see those methods
 for details about `IllegalArgumentException` during formatting and
 `ParseException` or null during parsing.
 The format does not support attributing of the returned format string.

**返回**

- this formatter as a classic format instance, not null
