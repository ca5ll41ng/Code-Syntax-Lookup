---
id: "java-en-function-lsserializer-writetouri"
language: "java"
lang: "en"
category: "function"
name: "LSSerializer.writeToURI"
signature: "public boolean writeToURI(Node nodeArg, String uri) throws LSException"
title: "LSSerializer.writeToURI"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializer.writeToURI

```java
public boolean writeToURI(Node nodeArg, String uri) throws LSException
```

A convenience method that acts as if LSSerializer.write
 was called with a LSOutput with no encoding specified
 and LSOutput.systemId set to the uri
 argument.

**参数**

- **nodeArg** — The node to serialize.
- **uri** — The URI to write to.

**返回**

- Returns true if node was successfully serialized. Return false in case the normal processing stopped but the implementation kept serializing the document; the result of the serialization being implementation dependent then.

**异常**

- **LSException** — SERIALIZE_ERR: Raised if the LSSerializer was unable to serialize the node. DOM applications should attach a DOMErrorHandler using the parameter "error-handler" if they wish to get details on the error.
