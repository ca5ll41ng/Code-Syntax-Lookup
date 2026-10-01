---
id: "java-en-function-tabulardata-get"
language: "java"
lang: "en"
category: "function"
name: "TabularData.get"
signature: "public CompositeData get(Object[] key)"
title: "TabularData.get"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.get

```java
public CompositeData get(Object[] key)
```

Returns the `CompositeData` value whose index is
 key, or `null` if there is no value mapping
 to key, in this `TabularData` instance.

**参数**

- **key** — the key of the row to return.

**返回**

- the value corresponding to key.

**异常**

- **NullPointerException** — if the key is `null`
- **InvalidKeyException** — if the key does not conform to this `TabularData` instance's * `TabularType` definition
