---
id: "java-en-function-javax-security-auth-login-logincontext"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.login.LoginContext"
title: "LoginContext"
directive: "type"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/LoginContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginContext

The `LoginContext` class describes the basic methods used
 to authenticate Subjects and provides a way to develop an
 application independent of the underlying authentication technology.
 A `Configuration` specifies the authentication technology, or
 `LoginModule`, to be used with a particular application.
 Different LoginModules can be plugged in under an application
 without requiring any modifications to the application itself.

 

 In addition to supporting pluggable authentication, this class
 also supports the notion of stacked authentication.
 Applications may be configured to use more than one
 LoginModule.  For example, one could
 configure both a Kerberos LoginModule and a smart card
 LoginModule under an application.

 

 A typical caller instantiates a LoginContext with
 a name and a `CallbackHandler`.
 LoginContext uses the name as the index into a
 Configuration to determine which LoginModules should be used,
 and which ones must succeed in order for the overall authentication to
 succeed.  The `CallbackHandler` is passed to the underlying
 LoginModules so they may communicate and interact with users
 (prompting for a username and password via a graphical user interface,
 for example).

 

 Once the caller has instantiated a LoginContext,
 it invokes the `login` method to authenticate
 a `Subject`.  The `login` method invokes
 the configured modules to perform their respective types of authentication
 (username/password, smart card pin verification, etc.).
 Note that the LoginModules will not attempt authentication retries nor
 introduce delays if the authentication fails.
 Such tasks belong to the LoginContext caller.

 

 If the `login` method returns without
 throwing an exception, then the overall authentication succeeded.
 The caller can then retrieve
 the newly authenticated Subject by invoking the
 `getSubject` method.  Principals and Credentials associated
 with the Subject may be retrieved by invoking the Subject's
 respective `getPrincipals`, `getPublicCredentials`,
 and `getPrivateCredentials` methods.

 

 To logout the Subject, the caller calls
 the `logout` method.  As with the `login`
 method, this `logout` method invokes the `logout`
 method for the configured modules.

 

 A LoginContext should not be used to authenticate
 more than one Subject.  A separate LoginContext
 should be used to authenticate each different Subject.

 

 The following documentation applies to all LoginContext constructors:
 

 
-  `Subject`
 
 
-  If the constructor has a Subject
 input parameter, the LoginContext uses the caller-specified
 Subject object.

 
-  If the caller specifies a `null` Subject
 and a `null` value is permitted,
 the LoginContext instantiates a new Subject.

 
-  If the constructor does **not** have a Subject
 input parameter, the LoginContext instantiates a new Subject.
 

 
-  `Configuration`
 
 
-  If the constructor has a Configuration
 input parameter and the caller specifies a non-null Configuration,
 the LoginContext uses the caller-specified Configuration.
 

 If the constructor does **not** have a Configuration
 input parameter, or if the caller specifies a `null`
 Configuration object, the constructor uses the following call to
 get the installed Configuration:
 
```

      config = Configuration.getConfiguration();
 
```

 For both cases,
 the name argument given to the constructor is passed to the
 `Configuration.getAppConfigurationEntry` method.
 If the Configuration has no entries for the specified name,
 then the `LoginContext` calls
 `getAppConfigurationEntry` with the name, "other"
 (the default entry name).  If there is no entry for "other",
 then a `LoginException` is thrown.
 

 
-  `CallbackHandler`
 
 
-  If the constructor has a CallbackHandler
 input parameter, the LoginContext uses the caller-specified
 CallbackHandler object.

 
-  If the constructor does **not** have a CallbackHandler
 input parameter, or if the caller specifies a `null`
 CallbackHandler object (and a `null` value is permitted),
 the LoginContext queries the
 `auth.login.defaultCallbackHandler` security property for the
 fully qualified class name of a default handler
 implementation. If the security property is not set,
 then the underlying modules will not have a
 CallbackHandler for use in communicating
 with users.  The caller thus assumes that the configured
 modules have alternative means for authenticating the user.

**参见**

- java.security.Security
- javax.security.auth.Subject
- javax.security.auth.callback.CallbackHandler
- javax.security.auth.login.Configuration
- javax.security.auth.spi.LoginModule
- java.security.Security security properties

> *Since 1.4*
