---
id: "java-en-function-datetimeformatterbuilder-parsestrict"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.parseStrict"
signature: "public DateTimeFormatterBuilder parseStrict()"
title: "DateTimeFormatterBuilder.parseStrict"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.parseStrict

```java
public DateTimeFormatterBuilder parseStrict()
```

Changes the parse style to be strict for the remainder of the formatter.
 

 Parsing can be strict or lenient - by default it is strict.
 This controls the degree of flexibility in matching the text and sign styles.
 

 When used, this method changes the parsing to be strict from this point onwards.
 As strict is the default, this is normally only needed after calling `parseLenient`.
 The change will remain in force until the end of the formatter that is eventually
 constructed or until `parseLenient` is called.

 text will not match any other `SPACE_SEPARATOR SPACE_SEPARATOR`s
 in the pattern with the strict parse style.

**返回**

- this, for chaining, not null
