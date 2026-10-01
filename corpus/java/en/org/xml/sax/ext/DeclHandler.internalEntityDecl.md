---
id: "java-en-function-declhandler-internalentitydecl"
language: "java"
lang: "en"
category: "function"
name: "DeclHandler.internalEntityDecl"
signature: "public abstract void internalEntityDecl (String name, String value) throws SAXException"
title: "DeclHandler.internalEntityDecl"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DeclHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeclHandler.internalEntityDecl

```java
public abstract void internalEntityDecl (String name, String value) throws SAXException
```

Report an internal entity declaration.

 

Only the effective (first) declaration for each entity
 will be reported.  All parameter entities in the value
 will be expanded, but general entities will not.

**参数**

- **name** — The name of the entity.  If it is a parameter entity, the name will begin with '%'.
- **value** — The replacement text of the entity.

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #externalEntityDecl
- org.xml.sax.DTDHandler#unparsedEntityDecl
