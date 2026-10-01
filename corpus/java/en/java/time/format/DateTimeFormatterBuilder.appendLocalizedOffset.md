---
id: "java-en-function-datetimeformatterbuilder-appendlocalizedoffset"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendLocalizedOffset"
signature: "public DateTimeFormatterBuilder appendLocalizedOffset(TextStyle style)"
title: "DateTimeFormatterBuilder.appendLocalizedOffset"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendLocalizedOffset

```java
public DateTimeFormatterBuilder appendLocalizedOffset(TextStyle style)
```

Appends the localized zone offset, such as 'GMT+01:00', to the formatter.
 

 This appends a localized zone offset to the builder, the format of the
 localized offset is controlled by the specified `FormatStyle style`
 to this method:
 
 
- `FULL full` - formats with localized offset text, such
 as 'GMT, 2-digit hour and minute field, optional second field if non-zero,
 and colon.
 
- `SHORT short` - formats with localized offset text,
 such as 'GMT, hour without leading zero, optional 2-digit minute and
 second if non-zero, and colon.
 

 

 During formatting, the offset is obtained using a mechanism equivalent
 to querying the temporal with `offset`.
 If the offset cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 

 During parsing, the offset is parsed using the format defined above.
 If the offset cannot be parsed then an exception is thrown unless the
 section of the formatter is optional.

**参数**

- **style** — the format style to use, not null

**返回**

- this, for chaining, not null

**异常**

- **IllegalArgumentException** — if style is neither `FULL full` nor `SHORT short`
