---
id: "java-en-function-java-nio-channels-spi-abstractselector"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.spi.AbstractSelector"
title: "AbstractSelector"
directive: "type"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector

Base implementation class for selectors.

 

 This class encapsulates the low-level machinery required to implement
 the interruption of selection operations.  A concrete selector class must
 invoke the `begin begin` and `end end` methods before and
 after, respectively, invoking an I/O operation that might block
 indefinitely.  In order to ensure that the `end end` method is always
 invoked, these methods should be used within a
 `try`&nbsp;...&nbsp;`finally` block:

 {@snippet lang=java id="be" :
     try {
         begin();
         // Perform blocking I/O operation here
         ...
     } finally {
         end();
     }
 }

 

 This class also defines methods for maintaining a selector's
 cancelled-key set and for removing a key from its channel's key set, and
 declares the abstract `register register` method that is invoked by a
 selectable channel's `register register`
 method in order to perform the actual work of registering a channel.

> *Since 1.4*
