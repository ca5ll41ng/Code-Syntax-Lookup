---
id: "java-en-function-lsserializer-write"
language: "java"
lang: "en"
category: "function"
name: "LSSerializer.write"
signature: "public boolean write(Node nodeArg, LSOutput destination) throws LSException"
title: "LSSerializer.write"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializer.write

```java
public boolean write(Node nodeArg, LSOutput destination) throws LSException
```

Serialize the specified node as described above in the general
 description of the LSSerializer interface. The output is
 written to the supplied LSOutput.
 
 When writing to a LSOutput, the encoding is found by
 looking at the encoding information that is reachable through the
 LSOutput and the item to be written (or its owner
 document) in this order:
 
 
-  LSOutput.encoding,
 
 
- 
 Document.inputEncoding,
 
 
- 
 Document.xmlEncoding.
 
 

 
 If no encoding is reachable through the above properties, a
 default encoding of "UTF-8" will be used. If the specified encoding
 is not supported an "unsupported-encoding" fatal error is raised.
 
 If no output is specified in the LSOutput, a
 "no-output-specified" fatal error is raised.
 
 The implementation is responsible of associating the appropriate
 media type with the serialized data.
 
 When writing to a HTTP URI, a HTTP PUT is performed. When writing
 to other types of URIs, the mechanism for writing the data to the URI
 is implementation dependent.

**参数**

- **nodeArg** — The node to serialize.
- **destination** — The destination for the serialized DOM.

**返回**

- Returns true if node was successfully serialized. Return false in case the normal processing stopped but the implementation kept serializing the document; the result of the serialization being implementation dependent then.

**异常**

- **LSException** — SERIALIZE_ERR: Raised if the LSSerializer was unable to serialize the node. DOM applications should attach a DOMErrorHandler using the parameter "error-handler" if they wish to get details on the error.
