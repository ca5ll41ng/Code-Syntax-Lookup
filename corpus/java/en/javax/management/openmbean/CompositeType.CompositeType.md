---
id: "java-en-function-compositetype-compositetype"
language: "java"
lang: "en"
category: "function"
name: "CompositeType.CompositeType"
signature: "public CompositeType(String typeName, String description, String[] itemNames, String[] itemDescriptions, OpenType<?>[] itemTypes) throws OpenDataException"
title: "CompositeType.CompositeType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeType.CompositeType

```java
public CompositeType(String typeName, String description, String[] itemNames, String[] itemDescriptions, OpenType<?>[] itemTypes) throws OpenDataException
```

Constructs a CompositeType instance, checking for the validity of the given parameters.
 The validity constraints are described below for each parameter.
 

 Note that the contents of the three array parameters
 itemNames, itemDescriptions and itemTypes
 are internally copied so that any subsequent modification of these arrays by the caller of this constructor
 has no impact on the constructed CompositeType instance.
 

 The Java class name of composite data values this composite type represents
 (ie the class name returned by the `getClassName() getClassName` method)
 is set to the string value returned by CompositeData.class.getName().

**参数**

- **typeName** — The name given to the composite type this instance represents; cannot be a null or empty string.
- **description** — The human readable description of the composite type this instance represents; cannot be a null or empty string.
- **itemNames** — The names of the items contained in the composite data values described by this CompositeType instance; cannot be null and should contain at least one element; no element can be a null or empty string. Note that the order in which the item names are given is not important to differentiate a CompositeType instance from another; the item names are internally stored sorted in ascending alphanumeric order.
- **itemDescriptions** — The descriptions, in the same order as itemNames, of the items contained in the composite data values described by this CompositeType instance; should be of the same size as itemNames; no element can be null or an empty string.
- **itemTypes** — The open type instances, in the same order as itemNames, describing the items contained in the composite data values described by this CompositeType instance; should be of the same size as itemNames; no element can be null.

**异常**

- **IllegalArgumentException** — If typeName or description is a null or empty string, or itemNames or itemDescriptions or itemTypes is null, or any element of itemNames or itemDescriptions is a null or empty string, or any element of itemTypes is null, or itemNames or itemDescriptions or itemTypes are not of the same size.
- **OpenDataException** — If itemNames contains duplicate item names (case sensitive, but leading and trailing whitespaces removed).
