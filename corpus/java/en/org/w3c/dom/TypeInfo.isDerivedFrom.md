---
id: "java-en-function-typeinfo-isderivedfrom"
language: "java"
lang: "en"
category: "function"
name: "TypeInfo.isDerivedFrom"
signature: "public boolean isDerivedFrom(String typeNamespaceArg, String typeNameArg, int derivationMethod)"
title: "TypeInfo.isDerivedFrom"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/TypeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfo.isDerivedFrom

```java
public boolean isDerivedFrom(String typeNamespaceArg, String typeNameArg, int derivationMethod)
```

This method returns if there is a derivation between the reference
 type definition, i.e. the TypeInfo on which the method
 is being called, and the other type definition, i.e. the one passed
 as parameters.

**参数**

- **typeNamespaceArg** — the namespace of the other type definition.
- **typeNameArg** — the name of the other type definition.
- **derivationMethod** — the type of derivation and conditions applied between two types, as described in the list of constants provided in this interface.

**返回**

- If the document's schema is a DTD or no schema is associated with the document, this method will always return false .  If the document's schema is an XML Schema, the method will return true if the reference type definition is derived from the other type definition according to the derivation parameter. If the value of the parameter is 0 (no bit is set to 1 for the derivationMethod parameter), the method will return true if the other type definition can be reached by recursing any combination of {base type definition}, {item type definition}, or {member type definitions} from the reference type definition.
