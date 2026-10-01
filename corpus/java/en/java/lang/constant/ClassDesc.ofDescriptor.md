---
id: "java-en-function-classdesc-ofdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.ofDescriptor"
signature: "static ClassDesc ofDescriptor(String descriptor)"
title: "ClassDesc.ofDescriptor"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.ofDescriptor

```java
static ClassDesc ofDescriptor(String descriptor)
```

Returns a `ClassDesc` given a descriptor string for a class,
 interface, array, or primitive type.

 A field type descriptor string for a non-array type is either
 a one-letter code corresponding to a primitive type
 (`"J", "I", "C", "S", "B", "D", "F", "Z", "V"`), or the letter `"L"`, followed
 by the fully qualified binary name of a class, followed by `";"`.
 A field type descriptor for an array type is the character `"["`
 followed by the field descriptor for the component type.  Examples of
 valid type descriptor strings include `"Ljava/lang/String;"`, `"I"`,
 `"[I"`, `"V"`, `"[Ljava/lang/String;"`, etc.
 See JVMS {@jvms 4.3.2 }("Field Descriptors") for more detail.

**参数**

- **descriptor** — a field descriptor string

**返回**

- a `ClassDesc` describing the desired class

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if the descriptor string is not in the correct format

**参见**

- ClassDesc#of(String)
- ClassDesc#ofInternalName(String)
