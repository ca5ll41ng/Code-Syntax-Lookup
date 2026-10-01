---
id: "java-en-function-datetimeformatter-getchronology"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.getChronology"
signature: "public Chronology getChronology()"
title: "DateTimeFormatter.getChronology"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.getChronology

```java
public Chronology getChronology()
```

Gets the overriding chronology to be used during formatting.
 

 This returns the override chronology, used to convert dates.
 By default, a formatter has no override chronology, returning null.
 See `withChronology` for more details on overriding.

**返回**

- the override chronology of this formatter, null if no override
