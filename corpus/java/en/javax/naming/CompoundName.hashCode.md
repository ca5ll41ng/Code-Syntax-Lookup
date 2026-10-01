---
id: "java-en-function-compoundname-hashcode"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.hashCode"
signature: "public int hashCode()"
title: "CompoundName.hashCode"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.hashCode

```java
public int hashCode()
```

Computes the hash code of this compound name.
 The hash code is the sum of the hash codes of the "canonicalized"
 forms of individual components of this compound name.
 Each component is "canonicalized" according to the
 compound name's syntax before its hash code is computed.
 For a case-insensitive name, for example, the uppercased form of
 a name has the same hash code as its lowercased equivalent.

**返回**

- An int representing the hash code of this name.
