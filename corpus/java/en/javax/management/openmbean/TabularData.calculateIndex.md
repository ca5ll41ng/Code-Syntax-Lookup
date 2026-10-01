---
id: "java-en-function-tabulardata-calculateindex"
language: "java"
lang: "en"
category: "function"
name: "TabularData.calculateIndex"
signature: "public Object[] calculateIndex(CompositeData value)"
title: "TabularData.calculateIndex"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.calculateIndex

```java
public Object[] calculateIndex(CompositeData value)
```

Calculates the index that would be used in this `TabularData` instance to refer to the specified
 composite data value parameter if it were added to this instance.
 This method checks for the type validity of the specified value,
 but does not check if the calculated index is already used to refer to a value in this `TabularData` instance.

**参数**

- **value** — the composite data value whose index in this `TabularData` instance is to be calculated; must be of the same composite type as this instance's row type; must not be null.

**返回**

- the index that the specified value would have in this `TabularData` instance.

**异常**

- **NullPointerException** — if value is `null`
- **InvalidOpenTypeException** — if value does not conform to this `TabularData` instance's row type definition.
