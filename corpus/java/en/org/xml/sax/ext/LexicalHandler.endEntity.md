---
id: "java-en-function-lexicalhandler-endentity"
language: "java"
lang: "en"
category: "function"
name: "LexicalHandler.endEntity"
signature: "public abstract void endEntity (String name) throws SAXException"
title: "LexicalHandler.endEntity"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler.endEntity

```java
public abstract void endEntity (String name) throws SAXException
```

Report the end of an entity.

**参数**

- **name** — The name of the entity that is ending.

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #startEntity
