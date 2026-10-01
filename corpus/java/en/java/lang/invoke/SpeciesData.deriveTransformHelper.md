---
id: "java-en-function-speciesdata-derivetransformhelper"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.deriveTransformHelper"
signature: "protected abstract MethodHandle deriveTransformHelper(MemberName transform, int whichtm)"
title: "SpeciesData.deriveTransformHelper"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.deriveTransformHelper

```java
protected abstract MethodHandle deriveTransformHelper(MemberName transform, int whichtm)
```

Given the index of a method in the transforms list, supply a factory
 method that takes the arguments of the transform, plus the local fields,
 and produce a value of the required type.
 You can override this to return null or throw if there are no transforms.
 This method exists so that the transforms can be "grown" lazily.
 This is necessary if the transform *adds* a field to an instance,
 which sometimes requires the creation, on the fly, of an extended species.
 This method is only called once for any particular parameter.
 The species caches the result in a private array.

**参数**

- **transform** — the transform being implemented
- **whichtm** — the index of that transform in the original list of transforms

**返回**

- the method handle which creates a new result from a mix of transform arguments and field values
