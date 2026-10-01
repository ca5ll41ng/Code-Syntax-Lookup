---
id: "java-en-function-datetimeformatterbuilder-appendoptional"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendOptional"
signature: "public DateTimeFormatterBuilder appendOptional(DateTimeFormatter formatter)"
title: "DateTimeFormatterBuilder.appendOptional"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendOptional

```java
public DateTimeFormatterBuilder appendOptional(DateTimeFormatter formatter)
```

Appends a formatter to the builder which will optionally format/parse.
 

 This method has the same effect as appending each of the constituent
 parts directly to this builder surrounded by an `optionalStart` and
 `optionalEnd`.
 

 The formatter will format if data is available for all the fields contained within it.
 The formatter will parse if the string matches, otherwise no error is returned.

**参数**

- **formatter** — the formatter to add, not null

**返回**

- this, for chaining, not null
