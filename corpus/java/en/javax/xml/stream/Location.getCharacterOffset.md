---
id: "java-en-function-location-getcharacteroffset"
language: "java"
lang: "en"
category: "function"
name: "Location.getCharacterOffset"
signature: "int getCharacterOffset()"
title: "Location.getCharacterOffset"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/Location.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Location.getCharacterOffset

```java
int getCharacterOffset()
```

Return the byte or character offset into the input source this location
 is pointing to. If the input source is a file or a byte stream then
 this is the byte offset into that stream, but if the input source is
 a character media then the offset is the character offset.
 Returns -1 if there is no offset available.

**返回**

- the current offset
