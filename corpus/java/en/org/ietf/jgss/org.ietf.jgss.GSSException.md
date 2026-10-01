---
id: "java-en-function-org-ietf-jgss-gssexception"
language: "java"
lang: "en"
category: "function"
name: "org.ietf.jgss.GSSException"
title: "GSSException"
directive: "type"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException

This exception is thrown whenever a GSS-API error occurs, including
 any mechanism specific error.  It may contain both the major and the
 minor GSS-API status codes.  Major error codes are those defined at the
 GSS-API level in this class. Minor error codes are mechanism specific
 error codes that can provide additional information. The underlying
 mechanism implementation is responsible for setting appropriate minor
 status codes when throwing this exception.  Aside from delivering the
 numeric error codes to the caller, this class performs the mapping from
 their numeric values to textual representations.

> *Since 1.4*
