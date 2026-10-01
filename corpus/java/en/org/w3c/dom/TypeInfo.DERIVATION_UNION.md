---
id: "java-en-function-typeinfo-derivation_union"
language: "java"
lang: "en"
category: "function"
name: "TypeInfo.DERIVATION_UNION"
signature: "public static final int DERIVATION_UNION = 0x00000004"
title: "TypeInfo.DERIVATION_UNION"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/TypeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfo.DERIVATION_UNION

```java
public static final int DERIVATION_UNION = 0x00000004
```

If the document's schema is an XML Schema [XML Schema Part 1]
 , this constant represents the 
 union if simple types are involved.
 
 The reference type definition is derived by union from the other
 type definition if there exists two type definitions T1 and T2 such
 as the reference type definition is derived from T1 by
 DERIVATION_RESTRICTION or
 DERIVATION_EXTENSION, T2 is derived from the other type
 definition by DERIVATION_RESTRICTION, T1 has {variety} union, and one of the {member type definitions} is T2. Note that T1 could be
 the same as the reference type definition, and T2 could be the same
 as the other type definition.
