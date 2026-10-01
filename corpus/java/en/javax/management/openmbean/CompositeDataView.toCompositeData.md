---
id: "java-en-function-compositedataview-tocompositedata"
language: "java"
lang: "en"
category: "function"
name: "CompositeDataView.toCompositeData"
signature: "public CompositeData toCompositeData(CompositeType ct)"
title: "CompositeDataView.toCompositeData"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataView.toCompositeData

```java
public CompositeData toCompositeData(CompositeType ct)
```

Return a `CompositeData` corresponding to the values in
 this object.  The returned value should usually be an instance of
 `CompositeDataSupport`, or a class that serializes as a
 `CompositeDataSupport` via a `writeReplace` method.
 Otherwise, a remote client that receives the object might not be
 able to reconstruct it.

**参数**

- **ct** — The expected `CompositeType` of the returned value.  If the returned value is `cd`, then `cd.getCompositeType().equals(ct)` should be true. Typically this will be because `cd` is a `CompositeDataSupport` constructed with `ct` as its `CompositeType`.

**返回**

- the `CompositeData`.
