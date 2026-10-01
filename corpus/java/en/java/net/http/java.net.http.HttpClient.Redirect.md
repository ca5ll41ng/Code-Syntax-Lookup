---
id: "java-en-function-java-net-http-httpclient-redirect"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpClient.Redirect"
title: "Redirect"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Redirect

Defines the automatic redirection policy.

 

 The automatic redirection policy is checked whenever a `3XX`
 response code is received. If redirection does not happen automatically,
 then the response, containing the  `3XX` response code, is returned,
 where it can be handled manually.

 

 `Redirect` policy is set through the `followRedirects(Redirect) Builder.followRedirects`
 method.

 redirected request may be modified depending on the specific `30X`
 status code, as specified in 
 RFC 7231. In addition, the `301` and `302` status codes
 cause a `POST` request to be converted to a `GET` in the
 redirected request.

> *Since 11*
