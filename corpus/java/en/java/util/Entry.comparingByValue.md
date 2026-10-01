---
id: "java-en-function-entry-comparingbyvalue"
language: "java"
lang: "en"
category: "function"
name: "Entry.comparingByValue"
signature: "public static <K, V extends Comparable<? super V>> Comparator<Map.Entry<K, V>> comparingByValue()"
title: "Entry.comparingByValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Entry.comparingByValue

```java
public static <K, V extends Comparable<? super V>> Comparator<Map.Entry<K, V>> comparingByValue()
```

Returns a comparator that compares `Map.Entry` in natural order on value.

 

The returned comparator is serializable and throws `NullPointerException` when comparing an entry with null values.

**参数**

- **the** — type of the map keys
- **the** — `Comparable` type of the map values

**返回**

- a comparator that compares `Map.Entry` in natural order on value.

**参见**

- Comparable

> *Since 1.8*
