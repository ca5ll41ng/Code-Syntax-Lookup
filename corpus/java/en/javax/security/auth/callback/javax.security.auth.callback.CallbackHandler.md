---
id: "java-en-function-javax-security-auth-callback-callbackhandler"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.callback.CallbackHandler"
title: "CallbackHandler"
directive: "type"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/CallbackHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallbackHandler

An application implements a `CallbackHandler` and passes
 it to underlying security services so that they may interact with
 the application to retrieve specific authentication data,
 such as usernames and passwords, or to display certain information,
 such as error and warning messages.

 

 CallbackHandlers are implemented in an application-dependent fashion.
 For example, implementations for an application with a graphical user
 interface (GUI) may pop up windows to prompt for requested information
 or to display error messages.  An implementation may also choose to obtain
 requested information from an alternate source without asking the end user.

 

 Underlying security services make requests for different types
 of information by passing individual Callbacks to the
 `CallbackHandler`.  The `CallbackHandler`
 implementation decides how to retrieve and display information
 depending on the Callbacks passed to it.  For example,
 if the underlying service needs a username and password to
 authenticate a user, it uses a `NameCallback` and
 `PasswordCallback`.  The `CallbackHandler`
 can then choose to prompt for a username and password serially,
 or to prompt for both in a single window.

 

 A default `CallbackHandler` class implementation
 may be specified by setting the value of the
 `auth.login.defaultCallbackHandler` security property.

 

 If the security property is set to the fully qualified name of a
 `CallbackHandler` implementation class,
 then a `LoginContext` will load the specified
 `CallbackHandler` and pass it to the underlying LoginModules.
 The `LoginContext` only loads the default handler
 if it was not provided one.

 

 All default handler implementations must provide a public
 zero-argument constructor.

**参见**

- java.security.Security security properties

> *Since 1.4*
