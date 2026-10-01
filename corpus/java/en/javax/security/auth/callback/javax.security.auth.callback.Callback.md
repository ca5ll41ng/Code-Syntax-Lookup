---
id: "java-en-function-javax-security-auth-callback-callback"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.callback.Callback"
title: "Callback"
directive: "type"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/Callback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Callback

Implementations of this interface are passed to a
 `CallbackHandler`, allowing underlying security services
 the ability to interact with a calling application to retrieve specific
 authentication data such as usernames and passwords, or to display
 certain information, such as error and warning messages.

 

 `Callback` implementations do not retrieve or
 display the information requested by underlying security services.
 `Callback` implementations simply provide the means
 to pass such requests to applications, and for applications,
 if appropriate, to return requested information back to the
 underlying security services.

**参见**

- javax.security.auth.callback.CallbackHandler
- javax.security.auth.callback.ChoiceCallback
- javax.security.auth.callback.ConfirmationCallback
- javax.security.auth.callback.LanguageCallback
- javax.security.auth.callback.NameCallback
- javax.security.auth.callback.PasswordCallback
- javax.security.auth.callback.TextInputCallback
- javax.security.auth.callback.TextOutputCallback

> *Since 1.4*
