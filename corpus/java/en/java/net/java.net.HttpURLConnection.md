---
id: "java-en-function-java-net-httpurlconnection"
language: "java"
lang: "en"
category: "function"
name: "java.net.HttpURLConnection"
title: "HttpURLConnection"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection

A URLConnection with support for HTTP-specific features. See
  the spec  for
 details.
 

 Each HttpURLConnection instance is used to make a single request
 but the underlying network connection to the HTTP server may be
 transparently shared by other instances. Calling the close() methods
 on the InputStream or OutputStream of an HttpURLConnection
 after a request may free network resources associated with this
 instance but has no effect on any shared persistent connection.
 Calling the disconnect() method may close the underlying socket
 if a persistent connection is otherwise idle at that time.

 

The HTTP protocol handler has a few settings that can be accessed through
 System Properties. This covers
 Proxy settings as well as
  various other settings.

**参见**

- java.net.HttpURLConnection#disconnect()

> *Since 1.1*
