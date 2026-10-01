---
id: "java-en-function-map-entry"
language: "java"
lang: "en"
category: "function"
name: "Map.entry"
signature: "static <K, V> Entry<K, V> entry(K k, V v)"
title: "Map.entry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.entry

```java
static <K, V> Entry<K, V> entry(K k, V v)
```

Returns an unmodifiable `Entry` containing the given key and value.
 These entries are suitable for populating `Map` instances using the
 `ofEntries Map.ofEntries` method.
 The `Entry` instances created by this method have the following characteristics:

 
 
- They disallow `null` keys and values. Attempts to create them using a `null`
 key or value result in `NullPointerException`.
 
- They are unmodifiable. Calls to `setValue Entry.setValue`
 on a returned `Entry` result in `UnsupportedOperationException`.
 
- They are not serializable.
 
- They are value-based.
 Programmers should treat instances that are `equals(Object) equal`
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions
 about the identity of the returned instances. This method is free to
 create new instances or reuse existing ones.
 

 For a serializable `Entry`, see `AbstractMap.SimpleEntry` or
 `AbstractMap.SimpleImmutableEntry`.

**参数**

- **the** — key's type
- **the** — value's type
- **k** — the key
- **v** — the value

**返回**

- an `Entry` containing the specified key and value

**异常**

- **NullPointerException** — if the key or value is `null`

**参见**

- Map#ofEntries Map.ofEntries()

> *Since 9*
