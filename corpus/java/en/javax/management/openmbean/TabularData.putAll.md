---
id: "java-en-function-tabulardata-putall"
language: "java"
lang: "en"
category: "function"
name: "TabularData.putAll"
signature: "public void putAll(CompositeData[] values)"
title: "TabularData.putAll"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.putAll

```java
public void putAll(CompositeData[] values)
```

Add all the elements in values to this `TabularData` instance.
 If any  element in values does not satisfy the constraints defined in `put(CompositeData) put`,
 or if any two elements in values have the same index calculated according to this `TabularData`
 instance's `TabularType` definition, then an exception describing the failure is thrown
 and no element of values is added,  thus leaving this `TabularData` instance unchanged.

**参数**

- **values** — the array of composite data values to be added as new rows to this `TabularData` instance; if values is `null` or empty, this method returns without doing anything.

**异常**

- **NullPointerException** — if an element of values is `null`
- **InvalidOpenTypeException** — if an element of values does not conform to this `TabularData` instance's row type definition
- **KeyAlreadyExistsException** — if the index for an element of values, calculated according to this `TabularData` instance's `TabularType` definition already maps to an existing value in this instance, or two elements of values have the same index.
