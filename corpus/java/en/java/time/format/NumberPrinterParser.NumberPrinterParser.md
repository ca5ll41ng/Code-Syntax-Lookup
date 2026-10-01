---
id: "java-en-function-numberprinterparser-numberprinterparser"
language: "java"
lang: "en"
category: "function"
name: "NumberPrinterParser.NumberPrinterParser"
signature: "protected NumberPrinterParser(TemporalField field, int minWidth, int maxWidth, SignStyle signStyle, int subsequentWidth)"
title: "NumberPrinterParser.NumberPrinterParser"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberPrinterParser.NumberPrinterParser

```java
protected NumberPrinterParser(TemporalField field, int minWidth, int maxWidth, SignStyle signStyle, int subsequentWidth)
```

Constructor.

**参数**

- **field** — the field to format, not null
- **minWidth** — the minimum field width, from 1 to 19
- **maxWidth** — the maximum field width, from minWidth to 19
- **signStyle** — the positive/negative sign style, not null
- **subsequentWidth** — the width of subsequent non-negative numbers, 0 or greater, -1 if fixed width due to active adjacent parsing
