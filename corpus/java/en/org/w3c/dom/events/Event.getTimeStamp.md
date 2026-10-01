---
id: "java-en-function-event-gettimestamp"
language: "java"
lang: "en"
category: "function"
name: "Event.getTimeStamp"
signature: "public long getTimeStamp()"
title: "Event.getTimeStamp"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/Event.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Event.getTimeStamp

```java
public long getTimeStamp()
```

Used to specify the time (in milliseconds relative to the epoch) at
 which the event was created. Due to the fact that some systems may
 not provide this information the value of timeStamp may
 be not available for all events. When not available, a value of 0
 will be returned. Examples of epoch time are the time of the system
 start or 0:0:0 UTC 1st January 1970.
