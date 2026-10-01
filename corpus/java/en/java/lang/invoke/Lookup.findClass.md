---
id: "java-en-function-lookup-findclass"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findClass"
signature: "public Class<?> findClass(String targetName) throws ClassNotFoundException, IllegalAccessException"
title: "Lookup.findClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findClass

```java
public Class<?> findClass(String targetName) throws ClassNotFoundException, IllegalAccessException
```

Looks up a class by name from the lookup context defined by this `Lookup` object,
 as if resolved by an `ldc` instruction.
 Such a resolution, as specified in JVMS {@jvms 5.4.3.1}, attempts to locate and load the class,
 and then determines whether the class is accessible to this lookup object.
 

 For a class or an interface, the name is the `#binary-name binary name`.
 For an array class of `n` dimensions, the name begins with `n` occurrences
 of `'['` and followed by the element type as encoded in the
 `#nameFormat table` specified in `getName`.
 

 The lookup context here is determined by the `lookupClass() lookup class`,
 its class loader, and the `lookupModes() lookup modes`.

**参数**

- **targetName** — the `#binary-name binary name` of the class or the string representing an array class

**返回**

- the requested class.

**异常**

- **LinkageError** — if the linkage fails
- **ClassNotFoundException** — if the class cannot be loaded by the lookup class' loader.
- **IllegalAccessException** — if the class is not accessible, using the allowed access modes.
- **NullPointerException** — if `targetName` is null

> *Since 9*
