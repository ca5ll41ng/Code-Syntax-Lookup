---
id: "java-en-function-tabulardata-remove"
language: "java"
lang: "en"
category: "function"
name: "TabularData.remove"
signature: "public CompositeData remove(Object[] key)"
title: "TabularData.remove"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.remove

```java
public CompositeData remove(Object[] key)
```

Removes the `CompositeData` value whose index is key from this `TabularData` instance,
 and returns the removed value, or returns `null` if there is no value whose index is key.

**参数**

- **key** — the index of the value to get in this `TabularData` instance; must be valid with this `TabularData` instance's row type definition; must not be null.

**返回**

- previous value associated with specified key, or `null` if there was no mapping for key.

**异常**

- **NullPointerException** — if the key is `null`
- **InvalidKeyException** — if the key does not conform to this `TabularData` instance's `TabularType` definition
