---
id: "java-en-function-zoneidprinterparser-parse"
language: "java"
lang: "en"
category: "function"
name: "ZoneIdPrinterParser.parse"
signature: "public int parse(DateTimeParseContext context, CharSequence text, int position)"
title: "ZoneIdPrinterParser.parse"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneIdPrinterParser.parse

```java
public int parse(DateTimeParseContext context, CharSequence text, int position)
```

This implementation looks for the longest matching string.
 For example, parsing Etc/GMT-2 will return Etc/GMC-2 rather than just
 Etc/GMC although both are valid.
