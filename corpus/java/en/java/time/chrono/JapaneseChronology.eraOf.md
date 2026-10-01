---
id: "java-en-function-japanesechronology-eraof"
language: "java"
lang: "en"
category: "function"
name: "JapaneseChronology.eraOf"
signature: "public JapaneseEra eraOf(int eraValue)"
title: "JapaneseChronology.eraOf"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseChronology.eraOf

```java
public JapaneseEra eraOf(int eraValue)
```

Returns the calendar system era object from the given numeric value.

 The numeric values supported by this method are the same as the
 numeric values supported by `of`.

**参数**

- **eraValue** — the era value

**返回**

- the Japanese `Era` for the given numeric era value

**异常**

- **DateTimeException** — if `eraValue` is invalid
