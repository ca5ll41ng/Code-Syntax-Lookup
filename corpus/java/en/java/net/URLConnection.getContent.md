---
id: "java-en-function-urlconnection-getcontent"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getContent"
signature: "public Object getContent() throws IOException"
title: "URLConnection.getContent"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getContent

```java
public Object getContent() throws IOException
```

Retrieves the contents of this URL connection.
 

 This method first determines the content type of the object by
 calling the `getContentType` method. If this is
 the first time that the application has seen that specific content
 type, a content handler for that content type is created.
 

 This is done as follows:
 
 
- If the application has set up a content handler factory instance
     using the `setContentHandlerFactory` method, the
     `createContentHandler` method of that instance is called
     with the content type as an argument; the result is a content
     handler for that content type.
 
- If no `ContentHandlerFactory` has yet been set up,
     or if the factory's `createContentHandler` method
     returns `null`, then the `java.util.ServiceLoader
     ServiceLoader` mechanism is used to locate `java.net.ContentHandlerFactory ContentHandlerFactory`
     implementations using the system class
     loader. The order that factories are located is implementation
     specific, and an implementation is free to cache the located
     factories. A `java.util.ServiceConfigurationError
     ServiceConfigurationError`, `Error` or `RuntimeException`
     thrown from the `createContentHandler`, if encountered, will
     be propagated to the calling thread. The `createContentHandler` method of each factory, if instantiated, is
     invoked, with the content type, until a factory returns non-null,
     or all factories have been exhausted.
 
- Failing that, this method tries to load a content handler
     class as defined by `java.net.ContentHandler ContentHandler`.
     If the class does not exist, or is not a subclass of `ContentHandler`, then an `UnknownServiceException` is thrown.

**返回**

- the object fetched. The `instanceof` operator should be used to determine the specific kind of object returned.

**异常**

- **IOException** — if an I/O error occurs while getting the content.
- **UnknownServiceException** — if the protocol does not support the content type.

**参见**

- java.net.ContentHandlerFactory#createContentHandler(java.lang.String)
- java.net.URLConnection#getContentType()
- java.net.URLConnection#setContentHandlerFactory(java.net.ContentHandlerFactory)
