---
id: "java-en-function-datetimeformatterbuilder-parsecaseinsensitive"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.parseCaseInsensitive"
signature: "public DateTimeFormatterBuilder parseCaseInsensitive()"
title: "DateTimeFormatterBuilder.parseCaseInsensitive"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.parseCaseInsensitive

```java
public DateTimeFormatterBuilder parseCaseInsensitive()
```

Changes the parse style to be case insensitive for the remainder of the formatter.
 

 Parsing can be case sensitive or insensitive - by default it is case sensitive.
 This method allows the case sensitivity setting of parsing to be changed.
 

 Calling this method changes the state of the builder such that all
 subsequent builder method calls will parse text in case insensitive mode.
 See `parseCaseSensitive` for the opposite setting.
 The parse case sensitive/insensitive methods may be called at any point
 in the builder, thus the parser can swap between case parsing modes
 multiple times during the parse.

**返回**

- this, for chaining, not null
