---
id: "java-en-function-compositetype-isvalue"
language: "java"
lang: "en"
category: "function"
name: "CompositeType.isValue"
signature: "public boolean isValue(Object obj)"
title: "CompositeType.isValue"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeType.isValue

```java
public boolean isValue(Object obj)
```

Tests whether obj is a value which could be
 described by this CompositeType instance.

 

If obj is null or is not an instance of
 javax.management.openmbean.CompositeData,
 isValue returns false.

 

If obj is an instance of
 javax.management.openmbean.CompositeData, then let
 `ct` be its `CompositeType` as returned by `getCompositeType`.  The result is true if
 `this` is assignable from `ct`.  This
 means that:

 
 
- `getTypeName` equals
 `ct.getTypeName()`, and
 
- there are no item names present in `this` that are
 not also present in `ct`, and
 
- for every item in `this`, its type is assignable from
 the type of the corresponding item in `ct`.
 

 

A `TabularType` is assignable from another `TabularType` if they have the same `getTypeName() typeName` and `getIndexNames() index name list`, and the
 `getRowType() row type` of the first is
 assignable from the row type of the second.

 

An `ArrayType` is assignable from another `ArrayType` if they have the same `getDimension() dimension`; and both are `isPrimitiveArray() primitive arrays` or neither is;
 and the `getElementOpenType() element
 type` of the first is assignable from the element type of the
 second.

 

In every other case, an `OpenType` is assignable from
 another `OpenType` only if they are equal.

 

These rules mean that extra items can be added to a `CompositeData` without making it invalid for a `CompositeType`
 that does not have those items.

**参数**

- **obj** — the value whose open type is to be tested for compatibility with this CompositeType instance.

**返回**

- true if obj is a value for this composite type, false otherwise.
