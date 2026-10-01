---
id: "java-en-function-lookup-in"
language: "java"
lang: "en"
category: "function"
name: "Lookup.in"
signature: "public Lookup in(Class<?> requestedLookupClass)"
title: "Lookup.in"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.in

```java
public Lookup in(Class<?> requestedLookupClass)
```

Creates a lookup on the specified new lookup class.
 The resulting object will report the specified
 class as its own `lookupClass() lookupClass`.

 

 However, the resulting `Lookup` object is guaranteed
 to have no more access capabilities than the original.
 In particular, access capabilities can be lost as follows:
 
- If the new lookup class is different from the old lookup class,
 i.e. `ORIGINAL ORIGINAL` access is lost.
 
- If the new lookup class is in a different module from the old one,
 i.e. `MODULE MODULE` access is lost.
 
- If the new lookup class is in a different package
 than the old one, protected and default (package) members will not be accessible,
 i.e. `PROTECTED PROTECTED` and `PACKAGE PACKAGE` access are lost.
 
- If the new lookup class is not within the same package member
 as the old one, private members will not be accessible, and protected members
 will not be accessible by virtue of inheritance,
 i.e. `PRIVATE PRIVATE` access is lost.
 (Protected members may continue to be accessible because of package sharing.)
 
- If the new lookup class is not
 `accessClass(Class) accessible` to this lookup,
 then no members, not even public members, will be accessible
 i.e. all access modes are lost.
 
- If the new lookup class, the old lookup class and the previous lookup class
 are all in different modules i.e. teleporting to a third module,
 all access modes are lost.
 

 

 The new previous lookup class is chosen as follows:
 
 
- If the new lookup object has `UNCONDITIONAL UNCONDITIONAL` bit,
 the new previous lookup class is `null`.
 
- If the new lookup class is in the same module as the old lookup class,
 the new previous lookup class is the old previous lookup class.
 
- If the new lookup class is in a different module from the old lookup class,
 the new previous lookup class is the old lookup class.

 

 The resulting lookup's capabilities for loading classes
 (used during `findClass` invocations)
 are determined by the lookup class' loader,
 which may change due to this operation.

**参数**

- **requestedLookupClass** — the desired lookup class for the new lookup object

**返回**

- a lookup object which reports the desired lookup class, or the same object if there is no change

**异常**

- **IllegalArgumentException** — if `requestedLookupClass` is a primitive type or void or array class
- **NullPointerException** — if the argument is null

**参见**

- #accessClass(Class)
- Cross-module lookups
