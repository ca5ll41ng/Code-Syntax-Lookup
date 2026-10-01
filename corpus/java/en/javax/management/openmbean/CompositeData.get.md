---
id: "java-en-function-compositedata-get"
language: "java"
lang: "en"
category: "function"
name: "CompositeData.get"
signature: "public Object get(String key)"
title: "CompositeData.get"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeData.get

```java
public Object get(String key)
```

Returns the value of the item whose name is `key`.

**参数**

- **key** — the name of the item.

**返回**

- the value associated with this key.

**异常**

- **IllegalArgumentException** — if `key` is a null or empty String.
- **InvalidKeyException** — if `key` is not an existing item name for this `CompositeData` instance.
