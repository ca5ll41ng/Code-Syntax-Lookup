---
id: "java-en-function-javax-xml-transform-errorlistener"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.transform.ErrorListener"
title: "ErrorListener"
directive: "type"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/ErrorListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorListener

The listener interface used by a `TransformerFactory` or `Transformer`
 to notify callers of error messages that occur during a transformation process.
 An ErrorListener receives three levels of messages: warnings, errors and fatal
 errors as classified by their severity. Each of them is handled as described
 in their respective method.

 

 An ErrorListener instance can be registered to a `TransformerFactory`
 or `Transformer` through
 the `setErrorListener`
 or `setErrorListener`
 method to receive errors and warnings reported by the TransformerFactory
 or Transformer.

 

 When a listener is registered, the `TransformerFactory` or `Transformer`
 must use this interface to pass on all warnings and errors to the listener
 and let the application decide how to handle them.
 Note that the `TransformerFactory` or `Transformer` is not
 required to continue with the transformation after a call to
 `fatalError`.

 

 If an application does not provide a listener, the `TransformerFactory`
 or `Transformer` shall create one on its own. The default `ErrorListener`
 may take no action for warnings and recoverable errors, and allow the
 transformation to continue.
 However, the `TransformerFactory` or `Transformer` may still throw
 `TransformerException` when it decides it can not continue processing.

 `ErrorListener` to override the default behavior in order to ensure
 proper handling of warnings and errors.

> *Since 1.4*
