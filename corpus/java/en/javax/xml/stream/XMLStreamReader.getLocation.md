---
id: "java-en-function-xmlstreamreader-getlocation"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getLocation"
signature: "public Location getLocation()"
title: "XMLStreamReader.getLocation"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getLocation

```java
public Location getLocation()
```

Return the current location of the processor.
 If the Location is unknown the processor should return
 an implementation of Location that returns -1 for the
 location and null for the publicId and systemId.
 The location information is only valid until next() is
 called.

**返回**

- the location of the cursor
