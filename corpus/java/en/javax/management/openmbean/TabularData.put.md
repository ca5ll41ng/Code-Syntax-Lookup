---
id: "java-en-function-tabulardata-put"
language: "java"
lang: "en"
category: "function"
name: "TabularData.put"
signature: "public void put(CompositeData value)"
title: "TabularData.put"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.put

```java
public void put(CompositeData value)
```

Adds value to this `TabularData` instance.
 The composite type of value must be the same as this
 instance's row type (ie the composite type returned by
 this.getTabularType().`getRowType
 getRowType`), and there must not already be an existing
 value in this `TabularData` instance whose index is the
 same as the one calculated for the value to be
 added. The index for value is calculated according
 to this `TabularData` instance's `TabularType`
 definition (see TabularType.`getIndexNames getIndexNames`).

**参数**

- **value** — the composite data value to be added as a new row to this `TabularData` instance; must be of the same composite type as this instance's row type; must not be null.

**异常**

- **NullPointerException** — if value is `null`
- **InvalidOpenTypeException** — if value does not conform to this `TabularData` instance's row type definition.
- **KeyAlreadyExistsException** — if the index for value, calculated according to this `TabularData` instance's `TabularType` definition already maps to an existing value in the underlying HashMap.
