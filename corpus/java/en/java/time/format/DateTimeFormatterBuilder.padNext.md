---
id: "java-en-function-datetimeformatterbuilder-padnext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.padNext"
signature: "public DateTimeFormatterBuilder padNext(int padWidth)"
title: "DateTimeFormatterBuilder.padNext"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.padNext

```java
public DateTimeFormatterBuilder padNext(int padWidth)
```

Causes the next added printer/parser to pad to a fixed width using a space.
 

 This padding will pad to a fixed width using spaces.
 

 During formatting, the decorated element will be output and then padded
 to the specified width. An exception will be thrown during formatting if
 the pad width is exceeded.
 

 During parsing, the padding and decorated element are parsed.
 If parsing is lenient, then the pad width is treated as a maximum.
 The padding is parsed greedily. Thus, if the decorated element starts with
 the pad character, it will not be parsed.

**参数**

- **padWidth** — the pad width, 1 or greater

**返回**

- this, for chaining, not null

**异常**

- **IllegalArgumentException** — if pad width is too small
