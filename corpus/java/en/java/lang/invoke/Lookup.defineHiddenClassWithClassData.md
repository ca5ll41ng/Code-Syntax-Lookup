---
id: "java-en-function-lookup-definehiddenclasswithclassdata"
language: "java"
lang: "en"
category: "function"
name: "Lookup.defineHiddenClassWithClassData"
signature: "public Lookup defineHiddenClassWithClassData(byte[] bytes, Object classData, boolean initialize, ClassOption... options) throws IllegalAccessException"
title: "Lookup.defineHiddenClassWithClassData"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.defineHiddenClassWithClassData

```java
public Lookup defineHiddenClassWithClassData(byte[] bytes, Object classData, boolean initialize, ClassOption... options) throws IllegalAccessException
```

Creates a hidden class or interface from `bytes` with associated
 `classData(Lookup, String, Class) class data`,
 returning a `Lookup` on the newly created class or interface.

 

 This method is equivalent to calling
 `defineHiddenClass`
 as if the hidden class is injected with a private static final unnamed
 field which is initialized with the given `classData` at
 the first instruction of the class initializer.
 The newly created class is linked by the Java Virtual Machine.

 

 The `classData(Lookup, String, Class) MethodHandles::classData`
 and `classDataAt(Lookup, String, Class, int) MethodHandles::classDataAt`
 methods can be used to retrieve the `classData`.

 A framework can create a hidden class with class data with one or more
 objects and load the class data as dynamically-computed constant(s)
 via a bootstrap method.  `classData(Lookup, String, Class)
 Class data` is accessible only to the lookup object created by the newly
 defined hidden class but inaccessible to other members in the same nest
 (unlike private static fields that are accessible to nestmates).
 Care should be taken w.r.t. mutability for example when passing
 an array or other mutable structure through the class data.
 Changing any value stored in the class data at runtime may lead to
 unpredictable behavior.
 If the class data is a `List`, it is good practice to make it
 unmodifiable for example via `of List::of`.

**参数**

- **bytes** — the class bytes
- **classData** — pre-initialized class data
- **initialize** — if `true` the class will be initialized.
- **options** — `ClassOption class options`

**返回**

- the `Lookup` object on the hidden class, with `ORIGINAL original` and `hasFullPrivilegeAccess() full privilege` access

**异常**

- **IllegalAccessException** — if this `Lookup` does not have `hasFullPrivilegeAccess() full privilege` access
- **ClassFormatError** — if `bytes` is not a `ClassFile` structure
- **UnsupportedClassVersionError** — if `bytes` is not of a supported major or minor version
- **IllegalArgumentException** — if `bytes` denotes a class in a different package than the lookup class or `bytes` is not a class or interface (`ACC_MODULE` flag is set in the value of the `access_flags` item)
- **IncompatibleClassChangeError** — if the class or interface named as the direct superclass of `C` is in fact an interface, or if any of the classes or interfaces named as direct superinterfaces of `C` are not in fact interfaces
- **ClassCircularityError** — if any of the superclasses or superinterfaces of `C` is `C` itself
- **VerifyError** — if the newly created class cannot be verified
- **LinkageError** — if the newly created class cannot be linked for any other reason
- **NullPointerException** — if any parameter is `null`

**参见**

- Lookup#defineHiddenClass(byte[], boolean, ClassOption...)
- Class#isHidden()
- MethodHandles#classData(Lookup, String, Class)
- MethodHandles#classDataAt(Lookup, String, Class, int)

> *Since 16*
