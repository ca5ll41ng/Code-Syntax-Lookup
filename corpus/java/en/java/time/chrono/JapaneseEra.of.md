---
id: "java-en-function-japaneseera-of"
language: "java"
lang: "en"
category: "function"
name: "JapaneseEra.of"
signature: "public static JapaneseEra of(int japaneseEra)"
title: "JapaneseEra.of"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseEra.of

```java
public static JapaneseEra of(int japaneseEra)
```

Obtains an instance of `JapaneseEra` from an `int` value.
 
 
- The value `1` is associated with the 'Showa' era, because
 it contains 1970-01-01 (ISO calendar system).
 
- The values `-1` and `0` are associated with two earlier
 eras, Meiji and Taisho, respectively.
 
- A value greater than `1` is associated with a later era,
 beginning with Heisei (`2`).
 

 

 Every instance of `JapaneseEra` that is returned from the `values`
 method has an int value (available via `getValue` which is
 accepted by this method.

**参数**

- **japaneseEra** — the era to represent

**返回**

- the `JapaneseEra` singleton, not null

**异常**

- **DateTimeException** — if the value is invalid
