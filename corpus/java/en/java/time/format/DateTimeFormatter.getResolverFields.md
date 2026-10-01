---
id: "java-en-function-datetimeformatter-getresolverfields"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.getResolverFields"
signature: "public Set<TemporalField> getResolverFields()"
title: "DateTimeFormatter.getResolverFields"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.getResolverFields

```java
public Set<TemporalField> getResolverFields()
```

Gets the resolver fields to use during parsing.
 

 This returns the resolver fields, used during the second phase of parsing
 when fields are resolved into dates and times.
 By default, a formatter has no resolver fields, and thus returns null.
 See `withResolverFields` for more details.

**返回**

- the immutable set of resolver fields of this formatter, null if no fields
