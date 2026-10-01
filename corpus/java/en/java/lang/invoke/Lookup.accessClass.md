---
id: "java-en-function-lookup-accessclass"
language: "java"
lang: "en"
category: "function"
name: "Lookup.accessClass"
signature: "public <T> Class<T> accessClass(Class<T> targetClass) throws IllegalAccessException"
title: "Lookup.accessClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.accessClass

```java
public <T> Class<T> accessClass(Class<T> targetClass) throws IllegalAccessException
```

Determines if a class can be accessed from the lookup context defined by
 this `Lookup` object. The static initializer of the class is not run.
 If `targetClass` is an array class, `targetClass` is accessible
 if the element type of the array class is accessible.  Otherwise,
 `targetClass` is determined as accessible as follows.

 

 If `targetClass` is in the same module as the lookup class,
 the lookup class is `LC` in module `M1` and
 the previous lookup class is in module `M0` or
 `null` if not present,
 `targetClass` is accessible if and only if one of the following is true:
 
 
- If this lookup has `PRIVATE` access, `targetClass` is
     `LC` or other class in the same nest of `LC`.
 
- If this lookup has `PACKAGE` access, `targetClass` is
     in the same runtime package of `LC`.
 
- If this lookup has `MODULE` access, `targetClass` is
     a public type in `M1`.
 
- If this lookup has `PUBLIC` access, `targetClass` is
     a public type in a package exported by `M1` to at least  `M0`
     if the previous lookup class is present; otherwise, `targetClass`
     is a public type in a package exported by `M1` unconditionally.
 

 

 Otherwise, if this lookup has `UNCONDITIONAL` access, this lookup
 can access public types in all modules when the type is in a package
 that is exported unconditionally.
 

 Otherwise, `targetClass` is in a different module from `lookupClass`,
 and if this lookup does not have `PUBLIC` access, `lookupClass`
 is inaccessible.
 

 Otherwise, if this lookup has no `previousLookupClass() previous lookup class`,
 `M1` is the module containing `lookupClass` and
 `M2` is the module containing `targetClass`,
 then `targetClass` is accessible if and only if
 
 
- `M1` reads `M2`, and
 
- `targetClass` is public and in a package exported by
     `M2` at least to `M1`.
 

 

 Otherwise, if this lookup has a `previousLookupClass() previous lookup class`,
 `M1` and `M2` are as before, and `M0` is the module
 containing the previous lookup class, then `targetClass` is accessible
 if and only if one of the following is true:
 
 
- `targetClass` is in `M0` and `M1`
     `canRead`  reads} `M0` and the type is
     in a package that is exported to at least `M1`.
 
- `targetClass` is in `M1` and `M0`
     `canRead`  reads} `M1` and the type is
     in a package that is exported to at least `M0`.
 
- `targetClass` is in a third module `M2` and both `M0`
     and `M1` reads `M2` and the type is in a package
     that is exported to at least both `M0` and `M2`.
 

 

 Otherwise, `targetClass` is not accessible.

**参数**

- **the** — type of the class to be access-checked
- **targetClass** — the class to be access-checked

**返回**

- `targetClass` that has been access-checked

**异常**

- **IllegalAccessException** — if the class is not accessible from the lookup class and previous lookup class, if present, using the allowed access modes.
- **NullPointerException** — if `targetClass` is `null`

**参见**

- Cross-module lookups

> *Since 9*
