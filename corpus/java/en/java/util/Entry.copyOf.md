---
id: "java-en-function-entry-copyof"
language: "java"
lang: "en"
category: "function"
name: "Entry.copyOf"
signature: "public static <K, V> Map.Entry<K, V> copyOf(Map.Entry<? extends K, ? extends V> e)"
title: "Entry.copyOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Entry.copyOf

```java
public static <K, V> Map.Entry<K, V> copyOf(Map.Entry<? extends K, ? extends V> e)
```

Returns a copy of the given `Map.Entry`. The returned instance is not
 associated with any map. The returned instance has the same characteristics
 as instances returned by the `entry Map::entry` method.

 An instance obtained from a map's entry-set view has a connection to that map.
 The `copyOf` method may be used to create a `Map.Entry` instance,
 containing the same key and value, that is independent of any map.

 If the given entry was obtained from a call to `copyOf` or `Map::entry`,
 calling `copyOf` will generally not create another copy.

**参数**

- **the** — type of the key
- **the** — type of the value
- **e** — the entry to be copied

**返回**

- a map entry equal to the given entry

**异常**

- **NullPointerException** — if e is null or if either of its key or value is null

> *Since 17*
