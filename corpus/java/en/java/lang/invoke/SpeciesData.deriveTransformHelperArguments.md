---
id: "java-en-function-speciesdata-derivetransformhelperarguments"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.deriveTransformHelperArguments"
signature: "protected abstract <X> List<X> deriveTransformHelperArguments(MemberName transform, int whichtm, List<X> args, List<X> fields)"
title: "SpeciesData.deriveTransformHelperArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.deriveTransformHelperArguments

```java
protected abstract <X> List<X> deriveTransformHelperArguments(MemberName transform, int whichtm, List<X> args, List<X> fields)
```

During code generation, this method is called once per transform to determine
 what is the mix of arguments to hand to the transform-helper.  The bytecode
 which marshals these arguments is open-coded in the species-specific transform.
 The two lists are of opaque objects, which you shouldn't do anything with besides
 reordering them into the output list.  (They are both mutable, to make editing
 easier.)  The imputed types of the args correspond to the transform's parameter
 list, while the imputed types of the fields correspond to the species field types.
 After code generation, this method may be called occasionally by error-checking code.

**参数**

- **transform** — the transform being implemented
- **whichtm** — the index of that transform in the original list of transforms
- **args** — a list of opaque objects representing the incoming transform arguments
- **fields** — a list of opaque objects representing the field values of the receiver
- **the** — common element type of the various lists

**返回**

- a new list
