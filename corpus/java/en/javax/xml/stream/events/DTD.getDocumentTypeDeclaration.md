---
id: "java-en-function-dtd-getdocumenttypedeclaration"
language: "java"
lang: "en"
category: "function"
name: "DTD.getDocumentTypeDeclaration"
signature: "String getDocumentTypeDeclaration()"
title: "DTD.getDocumentTypeDeclaration"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/DTD.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DTD.getDocumentTypeDeclaration

```java
String getDocumentTypeDeclaration()
```

Returns the entire Document Type Declaration as a string, including the
 internal DTD subset. This may be null if there is not an internal subset.
 If it is not null it must return the entire Document Type Declaration
 which matches the doctypedecl production in the XML 1.0 specification

**返回**

- the Document Type Declaration
