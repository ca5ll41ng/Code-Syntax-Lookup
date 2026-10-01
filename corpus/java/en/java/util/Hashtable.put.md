---
id: "java-en-function-hashtable-put"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.put"
signature: "public synchronized V put(K key, V value)"
title: "Hashtable.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.put

```java
public synchronized V put(K key, V value)
```

Maps the specified `key` to the specified
 `value` in this hashtable. Neither the key nor the
 value can be `null`. 

 The value can be retrieved by calling the `get` method
 with a key that is equal to the original key.

**参数**

- **key** — the hashtable key
- **value** — the value

**返回**

- the previous value of the specified key in this hashtable, or `null` if it did not have one

**异常**

- **NullPointerException** — if the key or value is `null`

**参见**

- Object#equals(Object)
- #get(Object)
