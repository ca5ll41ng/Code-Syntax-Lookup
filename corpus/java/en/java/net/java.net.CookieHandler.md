---
id: "java-en-function-java-net-cookiehandler"
language: "java"
lang: "en"
category: "function"
name: "java.net.CookieHandler"
title: "CookieHandler"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieHandler

A CookieHandler object provides a callback mechanism to hook up a
 HTTP state management policy implementation into the HTTP protocol
 handler. The HTTP state management mechanism specifies a way to
 create a stateful session with HTTP requests and responses.

 

 A system-wide CookieHandler to be used by the `HttpURLConnection HTTP URL stream protocol handler` can be registered by
 doing a CookieHandler.setDefault(CookieHandler). The currently registered
 CookieHandler can be retrieved by calling
 CookieHandler.getDefault().

 For more information on HTTP state management, see RFC&nbsp;2965: HTTP
 State Management Mechanism

> *Since 1.5*
