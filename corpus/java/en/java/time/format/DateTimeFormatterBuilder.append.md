---
id: "java-en-function-datetimeformatterbuilder-append"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.append"
signature: "public DateTimeFormatterBuilder append(DateTimeFormatter formatter)"
title: "DateTimeFormatterBuilder.append"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.append

```java
public DateTimeFormatterBuilder append(DateTimeFormatter formatter)
```

Appends all the elements of a formatter to the builder.
 

 This method has the same effect as appending each of the constituent
 parts of the formatter directly to this builder.

**参数**

- **formatter** — the formatter to add, not null

**返回**

- this, for chaining, not null
