---
id: "java-en-function-javax-xml-stream-events-notationdeclaration"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.events.NotationDeclaration"
title: "NotationDeclaration"
directive: "type"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/NotationDeclaration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotationDeclaration

An interface for handling Notation Declarations

 Receive notification of a notation declaration event.
 It is up to the application to record the notation for later reference,
 At least one of publicId and systemId must be non-null.
 There is no guarantee that the notation declaration
 will be reported before any unparsed entities that use it.

> *Since 1.6*
