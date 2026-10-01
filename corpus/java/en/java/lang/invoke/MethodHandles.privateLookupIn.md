---
id: "java-en-function-methodhandles-privatelookupin"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.privateLookupIn"
signature: "public static Lookup privateLookupIn(Class<?> targetClass, Lookup caller) throws IllegalAccessException"
title: "MethodHandles.privateLookupIn"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.privateLookupIn

```java
public static Lookup privateLookupIn(Class<?> targetClass, Lookup caller) throws IllegalAccessException
```

Returns a `Lookup lookup` object on a target class to emulate all supported
 bytecode behaviors, including private access.
 The returned lookup object can provide access to classes in modules and packages,
 and members of those classes, outside the normal rules of Java access control,
 instead conforming to the more permissive rules for modular deep reflection.
 

 A caller, specified as a `Lookup` object, in module `M1` is
 allowed to do deep reflection on module `M2` and package of the target class
 if and only if all of the following conditions are `true`:
 
 
- The caller lookup object must have `hasFullPrivilegeAccess()
 full privilege access`.  Specifically:
   
     
- The caller lookup object must have the `MODULE MODULE` lookup mode.
         (This is because otherwise there would be no way to ensure the original lookup
         creator was a member of any particular module, and so any subsequent checks
         for readability and qualified exports would become ineffective.)
     
- The caller lookup object must have `PRIVATE PRIVATE` access.
         (This is because an application intending to share intra-module access
         using `MODULE MODULE` alone will inadvertently also share
         deep reflection to its own module.)
   

 
- The target class must be a proper class, not a primitive or array class.
 (Thus, `M2` is well-defined.)
 
- If the caller module `M1` differs from
 the target module `M2` then both of the following must be true:
   
     
- `M1` `canRead reads` `M2`.
     
- `M2` `isOpen(String,Module) opens` the package
         containing the target class to at least `M1`.
   

 

 

 If any of the above checks is violated, this method fails with an
 exception.
 

 Otherwise, if `M1` and `M2` are the same module, this method
 returns a `Lookup` on `targetClass` with
 `hasFullPrivilegeAccess() full privilege access`
 with `null` previous lookup class.
 

 Otherwise, `M1` and `M2` are two different modules.  This method
 returns a `Lookup` on `targetClass` that records
 the lookup class of the caller as the new previous lookup class with
 `PRIVATE` access but no `MODULE` access.
 

 The resulting `Lookup` object has no `ORIGINAL` access.

 `defineClass(byte[]) define classes` in the runtime package
 of `targetClass`. Extreme caution should be taken when opening a package
 to another module as such defined classes have the same full privilege
 access as other members in `targetClass`'s module.

**参数**

- **targetClass** — the target class
- **caller** — the caller lookup object

**返回**

- a lookup object for the target class, with private access

**异常**

- **IllegalArgumentException** — if `targetClass` is a primitive type or void or array class
- **NullPointerException** — if `targetClass` or `caller` is `null`
- **IllegalAccessException** — if any of the other access checks specified above fails

**参见**

- Lookup#dropLookupMode
- Cross-module lookups

> *Since 9*
