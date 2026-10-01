---
id: "java-en-function-xmlreaderadapter-skippedentity"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderAdapter.skippedEntity"
signature: "public void skippedEntity (String name) throws SAXException"
title: "XMLReaderAdapter.skippedEntity"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter.skippedEntity

```java
public void skippedEntity (String name) throws SAXException
```

Adapt a SAX2 skipped entity event.

**参数**

- **name** — The name of the skipped entity.

**异常**

- **org.xml.sax.SAXException** — Throwable by subclasses.

**参见**

- org.xml.sax.ContentHandler#skippedEntity
