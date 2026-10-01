---
id: "java-en-function-datetimeformatter-parsebest"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.parseBest"
signature: "public TemporalAccessor parseBest(CharSequence text, TemporalQuery<?>... queries)"
title: "DateTimeFormatter.parseBest"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.parseBest

```java
public TemporalAccessor parseBest(CharSequence text, TemporalQuery<?>... queries)
```

Fully parses the text producing an object of one of the specified types.
 

 This parse method is convenient for use when the parser can handle optional elements.
 For example, a pattern of 'uuuu-MM-dd HH.mm[ VV]' can be fully parsed to a `ZonedDateTime`,
 or partially parsed to a `LocalDateTime`.
 The queries must be specified in order, starting from the best matching full-parse option
 and ending with the worst matching minimal parse option.
 The query is typically a method reference to a `from(TemporalAccessor)` method.
 

 The result is associated with the first type that successfully parses.
 Normally, applications will use `instanceof` to check the result.
 For example:
 
```

  TemporalAccessor dt = parser.parseBest(str, ZonedDateTime::from, LocalDateTime::from);
  if (dt instanceof ZonedDateTime) {
   ...
  } else {
   ...
  }
 
```

 If the parse completes without reading the entire length of the text,
 or a problem occurs during parsing or merging, then an exception is thrown.

**参数**

- **text** — the text to parse, not null
- **queries** — the queries defining the types to attempt to parse to, must implement `TemporalAccessor`, not null

**返回**

- the parsed date-time, not null

**异常**

- **IllegalArgumentException** — if less than 2 types are specified
- **DateTimeParseException** — if unable to parse the requested result
