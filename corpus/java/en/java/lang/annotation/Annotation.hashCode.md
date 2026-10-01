---
id: "java-en-function-annotation-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Annotation.hashCode"
signature: "int hashCode()"
title: "Annotation.hashCode"
directive: "method"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/Annotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Annotation.hashCode

```java
int hashCode()
```

Returns the hash code of this annotation.

 

The hash code of an annotation is the sum of the hash codes
 of its members (including those with default values).

 The hash code of an annotation member is (127 times the hash code
 of the member-name as computed by `hashCode`) XOR
 the hash code of the member-value.
 The hash code of a member-value depends on its type as defined below:
 
 
- The hash code of a primitive value `v` is equal to
     WrapperType.valueOf(v).hashCode(), where
     `WrapperType` is the wrapper type corresponding
     to the primitive type of `v` (`Byte`,
     `Character`, `Double`, `Float`, `Integer`,
     `Long`, `Short`, or `Boolean`).

 
- The hash code of a string, enum, class, or annotation member-value
     `v` is computed as by calling
     v.hashCode().  (In the case of annotation
     member values, this is a recursive definition.)

 
- The hash code of an array member-value is computed by calling
     the appropriate overloading of
     `hashCode(long[]) Arrays.hashCode`
     on the value.  (There is one overloading for each primitive
     type, and one for object reference types.)

**返回**

- the hash code of this annotation
