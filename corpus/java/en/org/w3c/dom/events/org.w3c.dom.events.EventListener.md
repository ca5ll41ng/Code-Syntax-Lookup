---
id: "java-en-function-org-w3c-dom-events-eventlistener"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.events.EventListener"
title: "EventListener"
directive: "type"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/EventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventListener

The EventListener interface is the primary method for
 handling events. Users implement the EventListener interface
 and register their listener on an EventTarget using the
 AddEventListener method. The users should also remove their
 EventListener from its EventTarget after they
 have completed using the listener.
 

 When a Node is copied using the cloneNode
 method the EventListeners attached to the source
 Node are not attached to the copied Node. If
 the user wishes the same EventListeners to be added to the
 newly created copy the user must add them manually.
 

See also the Document Object Model (DOM) Level 2 Events Specification.

> *Since 1.5, DOM Level 2*
