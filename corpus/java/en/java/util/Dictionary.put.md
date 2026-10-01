---
id: "java-en-function-dictionary-put"
language: "java"
lang: "en"
category: "function"
name: "Dictionary.put"
signature: "public abstract V put(K key, V value)"
title: "Dictionary.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Dictionary.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Dictionary.put

```java
public abstract V put(K key, V value)
```

Maps the specified `key` to the specified
 `value` in this dictionary. Neither the key nor the
 value can be `null`.
 

 If this dictionary already contains an entry for the specified
 `key`, the value already in this dictionary for that
 `key` is returned, after modifying the entry to contain the
  new element. 

If this dictionary does not already have an entry
  for the specified `key`, an entry is created for the
  specified `key` and `value`, and `null` is
  returned.
 

 The `value` can be retrieved by calling the
 `get` method with a `key` that is equal to
 the original `key`.

**参数**

- **key** — the hashtable key.
- **value** — the value.

**返回**

- the previous value to which the `key` was mapped in this dictionary, or `null` if the key did not have a previous mapping.

**异常**

- **NullPointerException** — if the `key` or `value` is `null`.

**参见**

- java.lang.Object#equals(java.lang.Object)
- java.util.Dictionary#get(java.lang.Object)
