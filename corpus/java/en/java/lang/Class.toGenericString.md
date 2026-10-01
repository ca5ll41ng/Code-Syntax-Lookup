---
id: "java-en-function-class-togenericstring"
language: "java"
lang: "en"
category: "function"
name: "Class.toGenericString"
signature: "public String toGenericString()"
title: "Class.toGenericString"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.toGenericString

```java
public String toGenericString()
```

Returns a string describing this `Class`, including
 information about modifiers, `isSealed() sealed`/`non-sealed` status, and type parameters.

 The string is formatted as a list of type modifiers, if any,
 followed by the kind of type (empty string for primitive types
 and `class`, `enum`, `interface`,
 `@interface`, or `record` as appropriate), followed
 by the type's name, followed by an angle-bracketed
 comma-separated list of the type's type parameters, if any,
 including informative bounds on the type parameters, if any.

 A space is used to separate modifiers from one another and to
 separate any modifiers from the kind of type. The modifiers
 occur in canonical order. If there are no type parameters, the
 type parameter list is elided.

 For an array type, the string starts with the type name,
 followed by an angle-bracketed comma-separated list of the
 type's type parameters, if any, followed by a sequence of
 `[]` characters, one set of brackets per dimension of
 the array.

 

Note that since information about the runtime representation
 of a type is being generated, modifiers not present on the
 originating source code or illegal on the originating source
 code may be present.

**返回**

- a string describing this `Class`, including information about modifiers and type parameters

> *Since 1.8*
