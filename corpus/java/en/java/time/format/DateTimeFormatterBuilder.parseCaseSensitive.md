---
id: "java-en-function-datetimeformatterbuilder-parsecasesensitive"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.parseCaseSensitive"
signature: "public DateTimeFormatterBuilder parseCaseSensitive()"
title: "DateTimeFormatterBuilder.parseCaseSensitive"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.parseCaseSensitive

```java
public DateTimeFormatterBuilder parseCaseSensitive()
```

Changes the parse style to be case sensitive for the remainder of the formatter.
 

 Parsing can be case sensitive or insensitive - by default it is case sensitive.
 This method allows the case sensitivity setting of parsing to be changed.
 

 Calling this method changes the state of the builder such that all
 subsequent builder method calls will parse text in case sensitive mode.
 See `parseCaseInsensitive` for the opposite setting.
 The parse case sensitive/insensitive methods may be called at any point
 in the builder, thus the parser can swap between case parsing modes
 multiple times during the parse.
 

 Since the default is case sensitive, this method should only be used after
 a previous call to `#parseCaseInsensitive`.

**返回**

- this, for chaining, not null
