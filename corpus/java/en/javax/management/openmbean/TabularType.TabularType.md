---
id: "java-en-function-tabulartype-tabulartype"
language: "java"
lang: "en"
category: "function"
name: "TabularType.TabularType"
signature: "public TabularType(String typeName, String description, CompositeType rowType, String[] indexNames) throws OpenDataException"
title: "TabularType.TabularType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularType.TabularType

```java
public TabularType(String typeName, String description, CompositeType rowType, String[] indexNames) throws OpenDataException
```

Constructs a TabularType instance, checking for the validity of the given parameters.
 The validity constraints are described below for each parameter.
 

 The Java class name of tabular data values this tabular type represents
 (ie the class name returned by the `getClassName() getClassName` method)
 is set to the string value returned by TabularData.class.getName().

**参数**

- **typeName** — The name given to the tabular type this instance represents; cannot be a null or empty string.  &nbsp;
- **description** — The human readable description of the tabular type this instance represents; cannot be a null or empty string.  &nbsp;
- **rowType** — The type of the row elements of tabular data values described by this tabular type instance; cannot be null.  &nbsp;
- **indexNames** — The names of the items the values of which are used to uniquely index each row element in the tabular data values described by this tabular type instance; cannot be null or empty. Each element should be an item name defined in rowType (no null or empty string allowed). It is important to note that the **order** of the item names in indexNames is used by the methods `get(java.lang.Object[]) get` and `remove(java.lang.Object[]) remove` of class TabularData to match their array of values parameter to items.  &nbsp;

**异常**

- **IllegalArgumentException** — if rowType is null, or indexNames is a null or empty array, or an element in indexNames is a null or empty string, or typeName or description is a null or empty string.  &nbsp;
- **OpenDataException** — if an element's value of indexNames is not an item name defined in rowType.
