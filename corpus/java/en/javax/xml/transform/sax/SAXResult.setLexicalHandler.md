---
id: "java-en-function-saxresult-setlexicalhandler"
language: "java"
lang: "en"
category: "function"
name: "SAXResult.setLexicalHandler"
signature: "public void setLexicalHandler(LexicalHandler handler)"
title: "SAXResult.setLexicalHandler"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXResult.setLexicalHandler

```java
public void setLexicalHandler(LexicalHandler handler)
```

Set the SAX2 `org.xml.sax.ext.LexicalHandler` for the output.

 

This is needed to handle XML comments and the like.  If the
 lexical handler is not set, an attempt should be made by the
 transformer to cast the `org.xml.sax.ContentHandler` to a
 LexicalHandler.

**参数**

- **handler** — A non-null LexicalHandler for handling lexical parse events.
