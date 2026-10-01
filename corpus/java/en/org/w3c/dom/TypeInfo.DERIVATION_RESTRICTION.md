---
id: "java-en-function-typeinfo-derivation_restriction"
language: "java"
lang: "en"
category: "function"
name: "TypeInfo.DERIVATION_RESTRICTION"
signature: "public static final int DERIVATION_RESTRICTION = 0x00000001"
title: "TypeInfo.DERIVATION_RESTRICTION"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/TypeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfo.DERIVATION_RESTRICTION

```java
public static final int DERIVATION_RESTRICTION = 0x00000001
```

If the document's schema is an XML Schema [XML Schema Part 1]
 , this constant represents the derivation by 
 restriction if complex types are involved, or a 
 restriction if simple types are involved.
 
  The reference type definition is derived by restriction from the
 other type definition if the other type definition is the same as the
 reference type definition, or if the other type definition can be
 reached recursively following the {base type definition} property
 from the reference type definition, and all the derivation methods involved are restriction.
