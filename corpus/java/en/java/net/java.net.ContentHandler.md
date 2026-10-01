---
id: "java-en-function-java-net-contenthandler"
language: "java"
lang: "en"
category: "function"
name: "java.net.ContentHandler"
title: "ContentHandler"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler

The abstract class `ContentHandler` is the superclass
 of all classes that read an `Object` from a
 `URLConnection`.
 

 An application does not generally call the
 `getContent` method in this class directly. Instead, an
 application calls the `getContent` method in class
 `URL` or in `URLConnection`.
 The application's content handler factory (an instance of a class that
 implements the interface `ContentHandlerFactory` set up by a call to
 `setContentHandlerFactory(ContentHandlerFactory)
 setContentHandlerFactory`) is called with a `String` giving the
 MIME type of the object being received on the socket. The factory returns an
 instance of a subclass of `ContentHandler`, and its
 `getContent` method is called to create the object.
 

 If no content handler could be `getContent() found`,
 URLConnection will look for a content handler in a user-definable set of places.
 Users can define a vertical-bar delimited set of class prefixes
 to search through by defining the {@systemProperty java.content.handler.pkgs} system
 property. The class name must be of the form:
 
     {package-prefix}.{major}.{minor}
     

     where {major}.{minor} is formed by taking the
     content-type string, replacing all slash characters with a
     `period` ('.'), and all other non-alphanumeric characters
     with the underscore character '`_`'. The alphanumeric
     characters are specifically the 26 uppercase ASCII letters
     '`A`' through '`Z`', the 26 lowercase ASCII
     letters '`a`' through '`z`', and the 10 ASCII
     digits '`0`' through '`9`'.
     

     e.g.
     YoyoDyne.experimental.text.plain
 
 If no user-defined content handler is found, then the system
 tries to load a specific content-type handler from one
 of the built-in handlers, if one exists.

**参见**

- java.net.ContentHandler#getContent(java.net.URLConnection)
- java.net.ContentHandlerFactory
- java.net.URL#getContent()
- java.net.URLConnection
- java.net.URLConnection#getContent()
- java.net.URLConnection#setContentHandlerFactory(java.net.ContentHandlerFactory)

> *Since 1.0*
