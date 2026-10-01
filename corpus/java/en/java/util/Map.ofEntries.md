---
id: "java-en-function-map-ofentries"
language: "java"
lang: "en"
category: "function"
name: "Map.ofEntries"
signature: "static <K, V> Map<K, V> ofEntries(Entry<? extends K, ? extends V>... entries)"
title: "Map.ofEntries"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.ofEntries

```java
static <K, V> Map<K, V> ofEntries(Entry<? extends K, ? extends V>... entries)
```

Returns an unmodifiable map containing keys and values extracted from the given entries.
 The entries themselves are not stored in the map.
 See Unmodifiable Maps for details.

 It is convenient to create the map entries using the `entry Map.entry` method.
 For example,

 
```
`import static java.util.Map.entry;

     Map map = Map.ofEntries(
         entry(1, "a"),
         entry(2, "b"),
         entry(3, "c"),
         ...
         entry(26, "z"));
 `
```

**参数**

- **the** — `Map`'s key type
- **the** — `Map`'s value type
- **entries** — `Map.Entry`s containing the keys and values from which the map is populated

**返回**

- a `Map` containing the specified mappings

**异常**

- **IllegalArgumentException** — if there are any duplicate keys
- **NullPointerException** — if any entry, key, or value is `null`, or if the `entries` array is `null`

**参见**

- Map#entry Map.entry()

> *Since 9*
