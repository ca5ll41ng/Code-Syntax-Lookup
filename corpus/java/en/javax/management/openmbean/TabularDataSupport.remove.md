---
id: "java-en-function-tabulardatasupport-remove"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.remove"
signature: "public Object remove(Object key)"
title: "TabularDataSupport.remove"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.remove

```java
public Object remove(Object key)
```

This method simply calls `remove((Object[]) key)`.

**参数**

- **key** — an `Object[]` representing the key to remove.

**返回**

- previous value associated with specified key, or `null` if there was no mapping for key.

**异常**

- **NullPointerException** — if the key is `null`
- **ClassCastException** — if the key is not of the type `Object[]`
- **InvalidKeyException** — if the key does not conform to this `TabularData` instance's `TabularType` definition
