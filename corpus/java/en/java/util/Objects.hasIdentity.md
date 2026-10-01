---
id: "java-en-function-objects-hasidentity"
language: "java"
lang: "en"
category: "function"
name: "Objects.hasIdentity"
signature: "public static boolean hasIdentity(Object obj)"
title: "Objects.hasIdentity"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.hasIdentity

```java
public static boolean hasIdentity(Object obj)
```

{@return `true` if the input is a non-null reference
 to an object with identity, and `false` otherwise}

 

If the object is an instance of a concrete `isValue()
 value class`, it does not have identity and the result will be
 `false`. All other objects, including arrays, are identity objects
 and the result will be `true`.

 

This method returns `false` if and only if the parameter is
 `null` or if the parameter represents a value object when preview
 features are enabled.  All objects are identity objects when preview
 features are disabled; consequently, this method behaves the same as
 `nonNull Objects.nonNull` when preview features are disabled.

 If the parameter is `null`, there is no object
 and hence no identity; the result is `false`.
 To test for a value object use:
 {@snippet type="java" :
     if (obj != null && !Objects.hasIdentity(obj)) {
         // obj is a non-null value object
     }
 }

**参数**

- **obj** — an object or `null`

> *Since 28*
