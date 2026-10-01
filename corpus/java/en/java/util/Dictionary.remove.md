---
id: "java-en-function-dictionary-remove"
language: "java"
lang: "en"
category: "function"
name: "Dictionary.remove"
signature: "public abstract V remove(Object key)"
title: "Dictionary.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Dictionary.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Dictionary.remove

```java
public abstract V remove(Object key)
```

Removes the `key` (and its corresponding
 `value`) from this dictionary. This method does nothing
 if the `key` is not in this dictionary.

**参数**

- **key** — the key that needs to be removed.

**返回**

- the value to which the `key` had been mapped in this dictionary, or `null` if the key did not have a mapping.

**异常**

- **NullPointerException** — if `key` is `null`.
