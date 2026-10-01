---
id: "java-en-function-chronozoneddatetime-format"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.format"
signature: "default String format(DateTimeFormatter formatter)"
title: "ChronoZonedDateTime.format"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.format

```java
default String format(DateTimeFormatter formatter)
```

Formats this date-time using the specified formatter.
 

 This date-time will be passed to the formatter to produce a string.
 

 The default implementation must behave as follows:
 
```

  return formatter.format(this);
 
```

**参数**

- **formatter** — the formatter to use, not null

**返回**

- the formatted date-time string, not null

**异常**

- **DateTimeException** — if an error occurs during printing
