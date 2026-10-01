---
id: "java-en-function-lsinput-getbytestream"
language: "java"
lang: "en"
category: "function"
name: "LSInput.getByteStream"
signature: "public java.io.InputStream getByteStream()"
title: "LSInput.getByteStream"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.getByteStream

```java
public java.io.InputStream getByteStream()
```

An attribute of a language and binding dependent type that represents
 a stream of bytes.
 
 If the application knows the character encoding of the byte
 stream, it should set the encoding attribute. Setting the encoding in
 this way will override any encoding specified in an XML declaration
 in the data.
