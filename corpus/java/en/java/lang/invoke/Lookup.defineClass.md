---
id: "java-en-function-lookup-defineclass"
language: "java"
lang: "en"
category: "function"
name: "Lookup.defineClass"
signature: "public Class<?> defineClass(byte[] bytes) throws IllegalAccessException"
title: "Lookup.defineClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.defineClass

```java
public Class<?> defineClass(byte[] bytes) throws IllegalAccessException
```

Creates and links a class or interface from `bytes`
 with the same class loader and in the same runtime package and
 `java.security.ProtectionDomain protection domain` as this lookup's
 `lookupClass() lookup class` as if calling
 `defineClass(String,byte[],int,int,ProtectionDomain)
 ClassLoader::defineClass`.

 

 The `lookupModes() lookup modes` for this lookup must include
 `PACKAGE PACKAGE` access as default (package) members will be
 accessible to the class. The `PACKAGE` lookup mode serves to authenticate
 that the lookup object was created by a caller in the runtime package (or derived
 from a lookup originally created by suitably privileged code to a target class in
 the runtime package). 

 

 The `bytes` parameter is the class bytes of a valid class file (as defined
 by the The Java Virtual Machine Specification) with a class name in the
 same package as the lookup class. 

 

 This method does not run the class initializer. The class initializer may
 run at a later time, as detailed in section 12.4 of the The Java Language
 Specification.

**参数**

- **bytes** — the class bytes

**返回**

- the `Class` object for the class

**异常**

- **IllegalAccessException** — if this lookup does not have `PACKAGE` access
- **ClassFormatError** — if `bytes` is not a `ClassFile` structure
- **IllegalArgumentException** — if `bytes` denotes a class in a different package than the lookup class or `bytes` is not a class or interface (`ACC_MODULE` flag is set in the value of the `access_flags` item)
- **VerifyError** — if the newly created class cannot be verified
- **LinkageError** — if the newly created class cannot be linked for any other reason
- **NullPointerException** — if `bytes` is `null`

**参见**

- MethodHandles#privateLookupIn
- Lookup#dropLookupMode
- ClassLoader#defineClass(String,byte[],int,int,ProtectionDomain)

> *Since 9*
