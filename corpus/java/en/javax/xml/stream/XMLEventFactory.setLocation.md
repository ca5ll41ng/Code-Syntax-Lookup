---
id: "java-en-function-xmleventfactory-setlocation"
language: "java"
lang: "en"
category: "function"
name: "XMLEventFactory.setLocation"
signature: "public abstract void setLocation(Location location)"
title: "XMLEventFactory.setLocation"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventFactory.setLocation

```java
public abstract void setLocation(Location location)
```

This method allows setting of the Location on each event that
 is created by this factory.  The values are copied by value into
 the events created by this factory.  To reset the location
 information set the location to null.

**参数**

- **location** — the location to set on each event created
