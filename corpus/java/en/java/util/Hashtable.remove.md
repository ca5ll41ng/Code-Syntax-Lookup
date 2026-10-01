---
id: "java-en-function-hashtable-remove"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.remove"
signature: "public synchronized V remove(Object key)"
title: "Hashtable.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.remove

```java
public synchronized V remove(Object key)
```

Removes the key (and its corresponding value) from this
 hashtable. This method does nothing if the key is not in the hashtable.

**参数**

- **key** — the key that needs to be removed

**返回**

- the value to which the key had been mapped in this hashtable, or `null` if the key did not have a mapping

**异常**

- **NullPointerException** — if the key is `null`
