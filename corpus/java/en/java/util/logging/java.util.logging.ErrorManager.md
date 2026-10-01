---
id: "java-en-function-java-util-logging-errormanager"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.ErrorManager"
title: "ErrorManager"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/ErrorManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorManager

ErrorManager objects can be attached to Handlers to process
 any error that occurs on a Handler during Logging.
 

 When processing logging output, if a Handler encounters problems
 then rather than throwing an Exception back to the issuer of
 the logging call (who is unlikely to be interested) the Handler
 should call its associated ErrorManager.

> *Since 1.4*
