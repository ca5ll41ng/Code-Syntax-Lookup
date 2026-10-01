---
id: "java-en-function-tabulardatasupport-putall"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.putAll"
signature: "public void putAll(Map<?,?> t)"
title: "TabularDataSupport.putAll"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.putAll

```java
public void putAll(Map<?,?> t)
```

Add all the values contained in the specified map t
 to this `TabularData` instance.  This method converts
 the collection of values contained in this map into an array of
 `CompositeData` values, if possible, and then call the
 method `putAll(CompositeData[])`. Note that the keys
 used in the specified map t are ignored. This method
 allows, for example to add the content of another
 `TabularData` instance with the same row type (but
 possibly different index names) into this instance.

**参数**

- **t** — the map whose values are to be added as new rows to this `TabularData` instance; if t is `null` or empty, this method returns without doing anything.

**异常**

- **NullPointerException** — if a value in t is `null`.
- **ClassCastException** — if a value in t is not an instance of `CompositeData`.
- **InvalidOpenTypeException** — if a value in t does not conform to this `TabularData` instance's row type definition.
- **KeyAlreadyExistsException** — if the index for a value in t, calculated according to this `TabularData` instance's `TabularType` definition already maps to an existing value in this instance, or two values in t have the same index.
