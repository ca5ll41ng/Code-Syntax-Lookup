---
id: "java-en-function-datetimeformatterbuilder-parselenient"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.parseLenient"
signature: "public DateTimeFormatterBuilder parseLenient()"
title: "DateTimeFormatterBuilder.parseLenient"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.parseLenient

```java
public DateTimeFormatterBuilder parseLenient()
```

Changes the parse style to be lenient for the remainder of the formatter.
 Note that case sensitivity is set separately to this method.
 

 Parsing can be strict or lenient - by default it is strict.
 This controls the degree of flexibility in matching the text and sign styles.
 Applications calling this method should typically also call `parseCaseInsensitive`.
 

 When used, this method changes the parsing to be lenient from this point onwards.
 The change will remain in force until the end of the formatter that is eventually
 constructed or until `parseStrict` is called.

 text will match any other `SPACE_SEPARATOR SPACE_SEPARATOR`s
 in the pattern with the lenient parse style.

**返回**

- this, for chaining, not null
