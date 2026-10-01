---
id: "java-en-function-hashtable-get"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.get"
signature: "public synchronized V get(Object key)"
title: "Hashtable.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.get

```java
public synchronized V get(Object key)
```

Returns the value to which the specified key is mapped,
 or `null` if this map contains no mapping for the key.

 

More formally, if this map contains a mapping from a key
 `k` to a value `v` such that `(key.equals(k))`,
 then this method returns `v`; otherwise it returns
 `null`.  (There can be at most one such mapping.)

**参数**

- **key** — the key whose associated value is to be returned

**返回**

- the value to which the specified key is mapped, or `null` if this map contains no mapping for the key

**异常**

- **NullPointerException** — if the specified key is null

**参见**

- #put(Object, Object)
