---
id: "java-en-function-entry-comparingbykey"
language: "java"
lang: "en"
category: "function"
name: "Entry.comparingByKey"
signature: "public static <K extends Comparable<? super K>, V> Comparator<Map.Entry<K, V>> comparingByKey()"
title: "Entry.comparingByKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Entry.comparingByKey

```java
public static <K extends Comparable<? super K>, V> Comparator<Map.Entry<K, V>> comparingByKey()
```

Returns a comparator that compares `Map.Entry` in natural order on key.

 

The returned comparator is serializable and throws `NullPointerException` when comparing an entry with a null key.

**参数**

- **the** — `Comparable` type of then map keys
- **the** — type of the map values

**返回**

- a comparator that compares `Map.Entry` in natural order on key.

**参见**

- Comparable

> *Since 1.8*
