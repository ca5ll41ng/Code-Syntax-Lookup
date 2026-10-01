---
id: "java-en-function-org-w3c-dom-events-mouseevent"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.events.MouseEvent"
title: "MouseEvent"
directive: "type"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/MouseEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MouseEvent

The MouseEvent interface provides specific contextual
 information associated with Mouse events.
 

The detail attribute inherited from UIEvent
 indicates the number of times a mouse button has been pressed and
 released over the same screen location during a user action. The
 attribute value is 1 when the user begins this action and increments by 1
 for each full sequence of pressing and releasing. If the user moves the
 mouse between the mousedown and mouseup the value will be set to 0,
 indicating that no click is occurring.
 

In the case of nested elements mouse events are always targeted at the
 most deeply nested element. Ancestors of the targeted element may use
 bubbling to obtain notification of mouse events which occur within its
 descendent elements.
 

See also the Document Object Model (DOM) Level 2 Events Specification.

> *Since 1.5, DOM Level 2*
