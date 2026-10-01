---
id: "java-en-function-declhandler-elementdecl"
language: "java"
lang: "en"
category: "function"
name: "DeclHandler.elementDecl"
signature: "public abstract void elementDecl (String name, String model) throws SAXException"
title: "DeclHandler.elementDecl"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DeclHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeclHandler.elementDecl

```java
public abstract void elementDecl (String name, String model) throws SAXException
```

Report an element type declaration.

 

The content model will consist of the string "EMPTY", the
 string "ANY", or a parenthesised group, optionally followed
 by an occurrence indicator.  The model will be normalized so
 that all parameter entities are fully resolved and all whitespace
 is removed, and will include the enclosing parentheses.  Other
 normalization (such as removing redundant parentheses or
 simplifying occurrence indicators) is at the discretion of the
 parser.

**参数**

- **name** — The element type name.
- **model** — The content model as a normalized string.

**异常**

- **SAXException** — The application may raise an exception.
