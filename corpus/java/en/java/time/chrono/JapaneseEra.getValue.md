---
id: "java-en-function-japaneseera-getvalue"
language: "java"
lang: "en"
category: "function"
name: "JapaneseEra.getValue"
signature: "public int getValue()"
title: "JapaneseEra.getValue"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseEra.getValue

```java
public int getValue()
```

Gets the numeric era `int` value.
 

 The `SHOWA` era that contains 1970-01-01 (ISO calendar system) has the value 1.
 Later eras are numbered from 2 (`HEISEI`).
 Earlier eras are numbered 0 (`TAISHO`), -1 (`MEIJI`)).

**返回**

- the era value
