---
id: "java-en-function-inputsource-isempty"
language: "java"
lang: "en"
category: "function"
name: "InputSource.isEmpty"
signature: "public boolean isEmpty()"
title: "InputSource.isEmpty"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.isEmpty

```java
public boolean isEmpty()
```

Indicates whether the `InputSource` object is empty. Empty is
 defined as follows:
 
 
- All of the input sources, including the public identifier, system
 identifier, byte stream, and character stream, are `null`.
 
 
- The public identifier and system identifier are  `null`, and
 byte and character stream are either  `null` or contain no byte
 or character.
 

 Note that this method will reset the byte stream if it is provided, or
 the character stream if the byte stream is not provided.
 
 

 

 In case of error while checking the byte or character stream, the method
 will return false to allow the XML processor to handle the error.

**返回**

- true if the `InputSource` object is empty, false otherwise
