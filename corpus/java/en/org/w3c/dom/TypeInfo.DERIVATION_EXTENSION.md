---
id: "java-en-function-typeinfo-derivation_extension"
language: "java"
lang: "en"
category: "function"
name: "TypeInfo.DERIVATION_EXTENSION"
signature: "public static final int DERIVATION_EXTENSION = 0x00000002"
title: "TypeInfo.DERIVATION_EXTENSION"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/TypeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfo.DERIVATION_EXTENSION

```java
public static final int DERIVATION_EXTENSION = 0x00000002
```

If the document's schema is an XML Schema [XML Schema Part 1]
 , this constant represents the derivation by 
 extension.
 
  The reference type definition is derived by extension from the
 other type definition if the other type definition can be reached
 recursively following the {base type definition} property from the
 reference type definition, and at least one of the derivation methods involved is an extension.
