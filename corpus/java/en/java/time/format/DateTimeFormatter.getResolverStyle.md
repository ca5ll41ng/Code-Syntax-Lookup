---
id: "java-en-function-datetimeformatter-getresolverstyle"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.getResolverStyle"
signature: "public ResolverStyle getResolverStyle()"
title: "DateTimeFormatter.getResolverStyle"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.getResolverStyle

```java
public ResolverStyle getResolverStyle()
```

Gets the resolver style to use during parsing.
 

 This returns the resolver style, used during the second phase of parsing
 when fields are resolved into dates and times.
 By default, a formatter has the `SMART SMART` resolver style.
 See `withResolverStyle` for more details.

**返回**

- the resolver style of this formatter, not null
