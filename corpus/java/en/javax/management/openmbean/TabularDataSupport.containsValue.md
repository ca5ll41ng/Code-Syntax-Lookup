---
id: "java-en-function-tabulardatasupport-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.containsValue"
signature: "public boolean containsValue(CompositeData value)"
title: "TabularDataSupport.containsValue"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.containsValue

```java
public boolean containsValue(CompositeData value)
```

Returns `true` if and only if this `TabularData` instance contains the specified
 `CompositeData` value. If value is `null` or does not conform to
 this `TabularData` instance's row type definition, this method simply returns `false`.

**参数**

- **value** — the row value whose presence in this `TabularData` instance is to be tested.

**返回**

- `true` if this `TabularData` instance contains the specified row value.
