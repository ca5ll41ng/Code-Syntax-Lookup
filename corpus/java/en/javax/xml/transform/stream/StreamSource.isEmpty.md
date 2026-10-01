---
id: "java-en-function-streamsource-isempty"
language: "java"
lang: "en"
category: "function"
name: "StreamSource.isEmpty"
signature: "public boolean isEmpty()"
title: "StreamSource.isEmpty"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamSource.isEmpty

```java
public boolean isEmpty()
```

Indicates whether the `StreamSource` object is empty. Empty is
 defined as follows:
 
 
- All of the input sources, including the public identifier, system
 identifier, byte stream, and character stream, are `null`.
 
 
- The public identifier and system identifier are `null`, and
 byte and character stream are either `null` or contain no byte or
 character.
 

 Note that this method will reset the byte stream if it is provided, or
 the character stream if the byte stream is not provided.
 
 

 

 In case of error while checking the byte or character stream, the method
 will return false to allow the XML processor to handle the error.

**返回**

- true if the `StreamSource` object is empty, false otherwise
