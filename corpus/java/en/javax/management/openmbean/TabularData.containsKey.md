---
id: "java-en-function-tabulardata-containskey"
language: "java"
lang: "en"
category: "function"
name: "TabularData.containsKey"
signature: "public boolean containsKey(Object[] key)"
title: "TabularData.containsKey"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.containsKey

```java
public boolean containsKey(Object[] key)
```

Returns `true` if and only if this `TabularData` instance contains a `CompositeData` value
 (ie a row) whose index is the specified key. If key is `null` or does not conform to
 this `TabularData` instance's `TabularType` definition, this method simply returns `false`.

**参数**

- **key** — the index value whose presence in this `TabularData` instance is to be tested.

**返回**

- `true` if this `TabularData` indexes a row value with the specified key.
