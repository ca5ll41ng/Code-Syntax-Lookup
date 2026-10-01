---
id: "java-en-function-documentevent-createevent"
language: "java"
lang: "en"
category: "function"
name: "DocumentEvent.createEvent"
signature: "public Event createEvent(String eventType) throws DOMException"
title: "DocumentEvent.createEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/DocumentEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentEvent.createEvent

```java
public Event createEvent(String eventType) throws DOMException
```

**参数**

- **eventType** — The eventType parameter specifies the type of Event interface to be created. If the Event interface specified is supported by the implementation this method will return a new Event of the interface type requested. If the Event is to be dispatched via the dispatchEvent method the appropriate event init method must be called after creation in order to initialize the Event's values. As an example, a user wishing to synthesize some kind of UIEvent would call createEvent with the parameter "UIEvents". The initUIEvent method could then be called on the newly created UIEvent to set the specific type of UIEvent to be dispatched and set its context information.The createEvent method is used in creating Events when it is either inconvenient or unnecessary for the user to create an Event themselves. In cases where the implementation provided Event is insufficient, users may supply their own Event implementations for use with the dispatchEvent method.

**返回**

- The newly created Event

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the implementation does not support the type of Event interface requested
