---
id: "java-en-function-java-net-http-unsupportedprotocolversionexception"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.UnsupportedProtocolVersionException"
title: "UnsupportedProtocolVersionException"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/UnsupportedProtocolVersionException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsupportedProtocolVersionException

Thrown when the HTTP client doesn't support a particular HTTP version.
 Typically, this exception may be thrown when attempting to
 `build() build` an `java.net.http.HttpClient`
 configured to use `HTTP_3
 HTTP version 3` by default, when the underlying `javax.net.ssl.SSLContext
 SSLContext` implementation does not meet the requirements for supporting
 the HttpClient's implementation of the underlying QUIC transport protocol.

> *Since 26*
