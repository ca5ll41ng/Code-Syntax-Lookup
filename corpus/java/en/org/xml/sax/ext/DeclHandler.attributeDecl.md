---
id: "java-en-function-declhandler-attributedecl"
language: "java"
lang: "en"
category: "function"
name: "DeclHandler.attributeDecl"
signature: "public abstract void attributeDecl (String eName, String aName, String type, String mode, String value) throws SAXException"
title: "DeclHandler.attributeDecl"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DeclHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeclHandler.attributeDecl

```java
public abstract void attributeDecl (String eName, String aName, String type, String mode, String value) throws SAXException
```

Report an attribute type declaration.

 

Only the effective (first) declaration for an attribute will
 be reported.  The type will be one of the strings "CDATA",
 "ID", "IDREF", "IDREFS", "NMTOKEN", "NMTOKENS", "ENTITY",
 "ENTITIES", a parenthesized token group with
 the separator "|" and all whitespace removed, or the word
 "NOTATION" followed by a space followed by a parenthesized
 token group with all whitespace removed.

 

The value will be the value as reported to applications,
 appropriately normalized and with entity and character
 references expanded.

**参数**

- **eName** — The name of the associated element.
- **aName** — The name of the attribute.
- **type** — A string representing the attribute type.
- **mode** — A string representing the attribute defaulting mode ("#IMPLIED", "#REQUIRED", or "#FIXED") or null if none of these applies.
- **value** — A string representing the attribute's default value, or null if there is none.

**异常**

- **SAXException** — The application may raise an exception.
