---
id: "java-en-function-compositetype-gettype"
language: "java"
lang: "en"
category: "function"
name: "CompositeType.getType"
signature: "public OpenType<?> getType(String itemName)"
title: "CompositeType.getType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeType.getType

```java
public OpenType<?> getType(String itemName)
```

Returns the open type of the item whose name is itemName,
 or null if this CompositeType instance does not define any item
 whose name is itemName.

**参数**

- **itemName** — the name of the time.

**返回**

- the type.
