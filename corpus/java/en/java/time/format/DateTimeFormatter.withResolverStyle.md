---
id: "java-en-function-datetimeformatter-withresolverstyle"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.withResolverStyle"
signature: "public DateTimeFormatter withResolverStyle(ResolverStyle resolverStyle)"
title: "DateTimeFormatter.withResolverStyle"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.withResolverStyle

```java
public DateTimeFormatter withResolverStyle(ResolverStyle resolverStyle)
```

Returns a copy of this formatter with a new resolver style.
 

 This returns a formatter with similar state to this formatter but
 with the resolver style set. By default, a formatter has the
 `SMART SMART` resolver style.
 

 Changing the resolver style only has an effect during parsing.
 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 The resolver style is used to control how phase 2, resolving, happens.
 See `ResolverStyle` for more information on the options available.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **resolverStyle** — the new resolver style, not null

**返回**

- a formatter based on this formatter with the requested resolver style, not null
