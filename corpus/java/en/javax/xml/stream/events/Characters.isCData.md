---
id: "java-en-function-characters-iscdata"
language: "java"
lang: "en"
category: "function"
name: "Characters.isCData"
signature: "public boolean isCData()"
title: "Characters.isCData"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/Characters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Characters.isCData

```java
public boolean isCData()
```

Returns true if this is a CData section.  If this
 event is CData its event type will be CDATA

 If javax.xml.stream.isCoalescing is set to true CDATA Sections
 that are surrounded by non CDATA characters will be reported
 as a single Characters event. This method will return false
 in this case.

**返回**

- true if it is `CDATA`, false otherwise
