---
id: "java-en-function-lexicalhandler-comment"
language: "java"
lang: "en"
category: "function"
name: "LexicalHandler.comment"
signature: "public abstract void comment (char ch[], int start, int length) throws SAXException"
title: "LexicalHandler.comment"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler.comment

```java
public abstract void comment (char ch[], int start, int length) throws SAXException
```

Report an XML comment anywhere in the document.

 

This callback will be used for comments inside or outside the
 document element, including comments in the external DTD
 subset (if read).  Comments in the DTD must be properly
 nested inside start/endDTD and start/endEntity events (if
 used).

**参数**

- **ch** — An array holding the characters in the comment.
- **start** — The starting position in the array.
- **length** — The number of characters to use from the array.

**异常**

- **SAXException** — The application may raise an exception.
