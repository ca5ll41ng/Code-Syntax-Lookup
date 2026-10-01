---
id: "java-en-function-lsserializer-writetostring"
language: "java"
lang: "en"
category: "function"
name: "LSSerializer.writeToString"
signature: "public String writeToString(Node nodeArg) throws DOMException, LSException"
title: "LSSerializer.writeToString"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializer.writeToString

```java
public String writeToString(Node nodeArg) throws DOMException, LSException
```

Serialize the specified node as described above in the general
 description of the LSSerializer interface. The output is
 written to a DOMString that is returned to the caller.
 The encoding used is the encoding of the DOMString type,
 i.e. UTF-16. Note that no Byte Order Mark is generated in a
 DOMString object.

**参数**

- **nodeArg** — The node to serialize.

**返回**

- Returns the serialized data.

**异常**

- **DOMException** — DOMSTRING_SIZE_ERR: Raised if the resulting string is too long to fit in a DOMString.
- **LSException** — SERIALIZE_ERR: Raised if the LSSerializer was unable to serialize the node. DOM applications should attach a DOMErrorHandler using the parameter "error-handler" if they wish to get details on the error.
