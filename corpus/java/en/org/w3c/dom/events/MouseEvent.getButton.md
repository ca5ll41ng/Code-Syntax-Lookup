---
id: "java-en-function-mouseevent-getbutton"
language: "java"
lang: "en"
category: "function"
name: "MouseEvent.getButton"
signature: "public short getButton()"
title: "MouseEvent.getButton"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/MouseEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MouseEvent.getButton

```java
public short getButton()
```

During mouse events caused by the depression or release of a mouse
 button, button is used to indicate which mouse button
 changed state. The values for button range from zero to
 indicate the left button of the mouse, one to indicate the middle
 button if present, and two to indicate the right button. For mice
 configured for left handed use in which the button actions are
 reversed the values are instead read from right to left.
