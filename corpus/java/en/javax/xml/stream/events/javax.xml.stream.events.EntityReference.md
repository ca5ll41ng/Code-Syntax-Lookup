---
id: "java-en-function-javax-xml-stream-events-entityreference"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.events.EntityReference"
title: "EntityReference"
directive: "type"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/EntityReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EntityReference

An interface for handling Entity events.

 This event reports entities that have not been resolved
 and reports their replacement text unprocessed (if
 available).  This event will be reported if javax.xml.stream.isReplacingEntityReferences
 is set to false.  If javax.xml.stream.isReplacingEntityReferences is set to true
 entity references will be resolved transparently.

 Entities are handled in two possible ways:

 (1) If javax.xml.stream.isReplacingEntityReferences is set to true
 all entity references are resolved and reported as markup transparently.
 (2) If javax.xml.stream.isReplacingEntityReferences is set to false
 Entity references are reported as an EntityReference Event.

> *Since 1.6*
