---
id: "java-en-function-dictionary-get"
language: "java"
lang: "en"
category: "function"
name: "Dictionary.get"
signature: "public abstract V get(Object key)"
title: "Dictionary.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Dictionary.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Dictionary.get

```java
public abstract V get(Object key)
```

Returns the value to which the key is mapped in this dictionary.
 The general contract for the `isEmpty` method is that if this
 dictionary contains an entry for the specified key, the associated
 value is returned; otherwise, `null` is returned.

**参数**

- **key** — a key in this dictionary. `null` if the key is not mapped to any value in this dictionary.

**返回**

- the value to which the key is mapped in this dictionary;

**异常**

- **NullPointerException** — if the `key` is `null`.

**参见**

- java.util.Dictionary#put(java.lang.Object, java.lang.Object)
