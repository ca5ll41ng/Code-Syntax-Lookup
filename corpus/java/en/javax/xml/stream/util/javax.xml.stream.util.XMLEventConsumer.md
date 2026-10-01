---
id: "java-en-function-javax-xml-stream-util-xmleventconsumer"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.util.XMLEventConsumer"
title: "XMLEventConsumer"
directive: "type"
module: "java.xml/javax.xml.stream.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/util/XMLEventConsumer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventConsumer

This interface defines an event consumer interface.  The contract of the
 of a consumer is to accept the event.  This interface can be used to
 mark an object as able to receive events.  Add may be called several
 times in immediate succession so a consumer must be able to cache
 events it hasn't processed yet.

> *Since 1.6*
