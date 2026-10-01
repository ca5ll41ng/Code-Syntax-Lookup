---
id: "java-en-function-compositedatasupport-getall"
language: "java"
lang: "en"
category: "function"
name: "CompositeDataSupport.getAll"
signature: "public Object[] getAll(String[] keys)"
title: "CompositeDataSupport.getAll"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataSupport.getAll

```java
public Object[] getAll(String[] keys)
```

Returns an array of the values of the items whose names are specified by
 `keys`, in the same order as `keys`.

**异常**

- **IllegalArgumentException** — if an element in `keys` is a null or empty String.
- **InvalidKeyException** — if an element in `keys` is not an existing item name for this `CompositeData` instance.
