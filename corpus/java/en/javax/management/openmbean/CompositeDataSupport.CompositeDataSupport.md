---
id: "java-en-function-compositedatasupport-compositedatasupport"
language: "java"
lang: "en"
category: "function"
name: "CompositeDataSupport.CompositeDataSupport"
signature: "public CompositeDataSupport( CompositeType compositeType, String[] itemNames, Object[] itemValues) throws OpenDataException"
title: "CompositeDataSupport.CompositeDataSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataSupport.CompositeDataSupport

```java
public CompositeDataSupport( CompositeType compositeType, String[] itemNames, Object[] itemValues) throws OpenDataException
```

Constructs a `CompositeDataSupport` instance with the specified
 `compositeType`, whose item values
 are specified by `itemValues[]`, in the same order as in
 `itemNames[]`.
 As a `CompositeType` does not specify any order on its items,
 the `itemNames[]` parameter is used
 to specify the order in which the values are given in `itemValues[]`.
 The items contained in this `CompositeDataSupport` instance are
 internally stored in a `TreeMap`,
 thus sorted in ascending lexicographic order of their names, for faster
 retrieval of individual item values.

 

The constructor checks that all the constraints listed below for each
 parameter are satisfied,
 and throws the appropriate exception if they are not.

**参数**

- **compositeType** — the composite type  of this composite data instance; must not be null.
- **itemNames** — `itemNames` must list, in any order, all the item names defined in `compositeType`; the order in which the names are listed, is used to match values in `itemValues[]`; must not be null or empty.
- **itemValues** — the values of the items, listed in the same order as their respective names in `itemNames`; each item value can be null, but if it is non-null it must be a valid value for the open type defined in `compositeType` for the corresponding item; must be of the same size as `itemNames`; must not be null or empty.

**异常**

- **IllegalArgumentException** — `compositeType` is null, or `itemNames[]` or `itemValues[]` is null or empty, or one of the elements in `itemNames[]` is a null or empty string, or `itemNames[]` and `itemValues[]` are not of the same size.
- **OpenDataException** — `itemNames[]` or `itemValues[]`'s size differs from the number of items defined in `compositeType`, or one of the elements in `itemNames[]` does not exist as an item name defined in `compositeType`, or one of the elements in `itemValues[]` is not a valid value for the corresponding item as defined in `compositeType`.
