---
id: "java-en-function-japaneseera-valueof"
language: "java"
lang: "en"
category: "function"
name: "JapaneseEra.valueOf"
signature: "public static JapaneseEra valueOf(String japaneseEra)"
title: "JapaneseEra.valueOf"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseEra.valueOf

```java
public static JapaneseEra valueOf(String japaneseEra)
```

Returns the `JapaneseEra` with the name.
 

 The string must match exactly the name of the era.
 (Extraneous whitespace characters are not permitted.)
 

 Valid era names are the names of eras returned from `values`.

**参数**

- **japaneseEra** — the japaneseEra name; non-null

**返回**

- the `JapaneseEra` singleton, never null

**异常**

- **IllegalArgumentException** — if there is not JapaneseEra with the specified name
