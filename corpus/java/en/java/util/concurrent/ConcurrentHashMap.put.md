---
id: "java-en-function-concurrenthashmap-put"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.put"
signature: "public V put(K key, V value)"
title: "ConcurrentHashMap.put"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.put

```java
public V put(K key, V value)
```

Maps the specified key to the specified value in this table.
 Neither the key nor the value can be null.

 

The value can be retrieved by calling the `get` method
 with a key that is equal to the original key.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — value to be associated with the specified key

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`

**异常**

- **NullPointerException** — if the specified key or value is null
