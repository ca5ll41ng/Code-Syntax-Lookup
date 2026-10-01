---
id: "java-en-function-tabulartype-isvalue"
language: "java"
lang: "en"
category: "function"
name: "TabularType.isValue"
signature: "public boolean isValue(Object obj)"
title: "TabularType.isValue"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularType.isValue

```java
public boolean isValue(Object obj)
```

Tests whether obj is a value which could be
 described by this TabularType instance.

 

If obj is null or is not an instance of
 javax.management.openmbean.TabularData,
 isValue returns false.

 

If obj is an instance of
 javax.management.openmbean.TabularData, say `td`, the result is true if this `TabularType` is
 assignable from `getTabularType()
 td.getTabularType`, as defined in `isValue CompositeType.isValue`.

**参数**

- **obj** — the value whose open type is to be tested for compatibility with this TabularType instance.

**返回**

- true if obj is a value for this tabular type, false otherwise.
