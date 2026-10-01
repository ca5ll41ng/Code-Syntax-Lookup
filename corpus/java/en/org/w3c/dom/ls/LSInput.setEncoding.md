---
id: "java-en-function-lsinput-setencoding"
language: "java"
lang: "en"
category: "function"
name: "LSInput.setEncoding"
signature: "public void setEncoding(String encoding)"
title: "LSInput.setEncoding"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.setEncoding

```java
public void setEncoding(String encoding)
```

The character encoding, if known. The encoding must be a string
 acceptable for an XML encoding declaration ([XML 1.0] section
 4.3.3 "Character Encoding in Entities").
 
 This attribute has no effect when the application provides a
 character stream or string data. For other sources of input, an
 encoding specified by means of this attribute will override any
 encoding specified in the XML declaration or the Text declaration, or
 an encoding obtained from a higher level protocol, such as HTTP [IETF RFC 2616].
