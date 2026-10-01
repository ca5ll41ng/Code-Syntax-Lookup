---
id: "java-en-function-java-util-toomanylistenersexception"
language: "java"
lang: "en"
category: "function"
name: "java.util.TooManyListenersException"
title: "TooManyListenersException"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TooManyListenersException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TooManyListenersException

The `TooManyListenersException ` Exception is used as part of
 the Java Event model to annotate and implement a unicast special case of
 a multicast Event Source.
 
 

 The presence of a "throws TooManyListenersException" clause on any given
 concrete implementation of the normally multicast "void addXyzEventListener"
 event listener registration pattern is used to annotate that interface as
 implementing a unicast Listener special case, that is, that one and only
 one Listener may be registered on the particular event listener source
 concurrently.

**参见**

- java.util.EventObject
- java.util.EventListener

> *Since 1.1*
