---
id: "java-en-function-javax-naming-authenticationexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.AuthenticationException"
title: "AuthenticationException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/AuthenticationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthenticationException

This exception is thrown when an authentication error occurs while
 accessing the naming or directory service.
 An authentication error can happen, for example, when the credentials
 supplied by the user program are invalid or otherwise fail to
 authenticate the user to the naming/directory service.

 If the program wants to handle this exception in particular, it
 should catch AuthenticationException explicitly before attempting to
 catch NamingException. After catching AuthenticationException, the
 program could reattempt the authentication by updating
 the resolved context's environment properties with the appropriate
 credentials.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
