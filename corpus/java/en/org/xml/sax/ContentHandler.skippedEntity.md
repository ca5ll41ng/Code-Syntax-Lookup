---
id: "java-en-function-contenthandler-skippedentity"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.skippedEntity"
signature: "public void skippedEntity (String name) throws SAXException"
title: "ContentHandler.skippedEntity"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.skippedEntity

```java
public void skippedEntity (String name) throws SAXException
```

Receive notification of a skipped entity.
 This is not called for entity references within markup constructs
 such as element start tags or markup declarations.  (The XML
 recommendation requires reporting skipped external entities.
 SAX also reports internal entity expansion/non-expansion, except
 within markup constructs.)

 

The Parser will invoke this method each time the entity is
 skipped.  Non-validating processors may skip entities if they
 have not seen the declarations (because, for example, the
 entity was declared in an external DTD subset).  All processors
 may skip external entities, depending on the values of the
 http://xml.org/sax/features/external-general-entities
 and the
 http://xml.org/sax/features/external-parameter-entities
 properties.

**参数**

- **name** — the name of the skipped entity.  If it is a parameter entity, the name will begin with '%', and if it is the external DTD subset, it will be the string "[dtd]"

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception
