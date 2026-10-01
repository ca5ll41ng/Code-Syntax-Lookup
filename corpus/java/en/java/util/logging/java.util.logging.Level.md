---
id: "java-en-function-java-util-logging-level"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.Level"
title: "Level"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Level.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Level

The Level class defines a set of standard logging levels that
 can be used to control logging output.  The logging Level objects
 are ordered and are specified by ordered integers.  Enabling logging
 at a given level also enables logging at all higher levels.
 

 Clients should normally use the predefined Level constants such
 as Level.SEVERE.
 

 The levels in descending order are:
 
 
- SEVERE (highest value)
 
- WARNING
 
- INFO
 
- CONFIG
 
- FINE
 
- FINER
 
- FINEST  (lowest value)
 

 In addition there is a level OFF that can be used to turn
 off logging, and a level ALL that can be used to enable
 logging of all messages.
 

 It is possible for third parties to define additional logging
 levels by subclassing Level.  In such cases subclasses should
 take care to chose unique integer level values and to ensure that
 they maintain the Object uniqueness property across serialization
 by defining a suitable readResolve method.

> *Since 1.4*
