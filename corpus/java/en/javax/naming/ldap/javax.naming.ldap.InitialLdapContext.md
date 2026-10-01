---
id: "java-en-function-javax-naming-ldap-initialldapcontext"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.InitialLdapContext"
title: "InitialLdapContext"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/InitialLdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialLdapContext

This class is the starting context for performing
 LDAPv3-style extended operations and controls.

 See `javax.naming.InitialContext` and
 `javax.naming.InitialDirContext` for details on synchronization,
 and the policy for how an initial context is created.

 Request Controls
 When you create an initial context (`InitialLdapContext`),
 you can specify a list of request controls.
 These controls will be used as the request controls for any
 implicit LDAP "bind" operation performed by the context or contexts
 derived from the context. These are called connection request controls.
 Use `getConnectControls()` to get a context's connection request
 controls.

 The request controls supplied to the initial context constructor
 are not used as the context request controls
 for subsequent context operations such as searches and lookups.
 Context request controls are set and updated by using
 `setRequestControls()`.

 As shown, there can be two different sets of request controls
 associated with a context: connection request controls and context
 request controls.
 This is required for those applications needing to send critical
 controls that might not be applicable to both the context operation and
 any implicit LDAP "bind" operation.
 A typical user program would do the following:

```

 InitialLdapContext lctx = new InitialLdapContext(env, critConnCtls);
 lctx.setRequestControls(critModCtls);
 lctx.modifyAttributes(name, mods);
 Controls[] respCtls =  lctx.getResponseControls();

```

 It specifies first the critical controls for creating the initial context
 (`critConnCtls`), and then sets the context's request controls
 (`critModCtls`) for the context operation. If for some reason
 `lctx` needs to reconnect to the server, it will use
 `critConnCtls`. See the `LdapContext` interface for
 more discussion about request controls.

 Service provider implementors should read the "Service Provider" section
 in the `LdapContext` class description for implementation details.

**参见**

- LdapContext
- javax.naming.InitialContext
- javax.naming.directory.InitialDirContext
- javax.naming.spi.NamingManager#setInitialContextFactoryBuilder

> *Since 1.3*
