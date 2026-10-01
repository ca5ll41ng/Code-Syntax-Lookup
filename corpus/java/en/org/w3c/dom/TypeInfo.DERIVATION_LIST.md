---
id: "java-en-function-typeinfo-derivation_list"
language: "java"
lang: "en"
category: "function"
name: "TypeInfo.DERIVATION_LIST"
signature: "public static final int DERIVATION_LIST = 0x00000008"
title: "TypeInfo.DERIVATION_LIST"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/TypeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfo.DERIVATION_LIST

```java
public static final int DERIVATION_LIST = 0x00000008
```

If the document's schema is an XML Schema [XML Schema Part 1]
 , this constant represents the list.
 
 The reference type definition is derived by list from the other
 type definition if there exists two type definitions T1 and T2 such
 as the reference type definition is derived from T1 by
 DERIVATION_RESTRICTION or
 DERIVATION_EXTENSION, T2 is derived from the other type
 definition by DERIVATION_RESTRICTION, T1 has {variety} list, and T2 is the {item type definition}. Note that T1 could be the same as
 the reference type definition, and T2 could be the same as the other
 type definition.
