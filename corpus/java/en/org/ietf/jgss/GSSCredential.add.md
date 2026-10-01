---
id: "java-en-function-gsscredential-add"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.add"
signature: "void add(GSSName name, int initLifetime, int acceptLifetime, Oid mech, int usage) throws GSSException"
title: "GSSCredential.add"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.add

```java
void add(GSSName name, int initLifetime, int acceptLifetime, Oid mech, int usage) throws GSSException
```

Adds a mechanism specific credential-element to an existing
 credential.  This method allows the construction of credentials, one
 mechanism at a time.

 This routine is envisioned to be used mainly by context acceptors
 during the creation of acceptor credentials which are to be used
 with a variety of clients using different security mechanisms.

 This routine adds the new credential element "in-place".  To add the
 element in a new credential, first call `clone` to obtain a
 copy of this credential, then call its `add` method.

 As always, GSS-API implementations must impose a local access-control
 policy on callers to prevent unauthorized callers from acquiring
 credentials to which they are not entitled.

 Non-default values for initLifetime and acceptLifetime cannot always
 be honored by the underlying mechanisms, thus callers should be
 prepared to call `getRemainingInitLifetime(Oid)
 getRemainingInitLifetime` and `getRemainingAcceptLifetime(Oid)
 getRemainingAcceptLifetime` on the credential.

**参数**

- **name** — the name of the principal for whom this credential is to be acquired.  Use `null` to specify the default principal.
- **initLifetime** — the number of seconds that the credential element should remain valid for initiating of security contexts. Use `INDEFINITE_LIFETIME GSSCredential.INDEFINITE_LIFETIME` to request that the credentials have the maximum permitted lifetime for this.  Use `DEFAULT_LIFETIME GSSCredential.DEFAULT_LIFETIME` to request default credential lifetime for this.
- **acceptLifetime** — the number of seconds that the credential element should remain valid for accepting security contexts. Use `INDEFINITE_LIFETIME GSSCredential.INDEFINITE_LIFETIME` to request that the credentials have the maximum permitted lifetime for this.  Use `DEFAULT_LIFETIME GSSCredential.DEFAULT_LIFETIME` to request default credential lifetime for this.
- **mech** — the mechanism over which the credential is to be acquired.
- **usage** — the usage mode that this credential element should add to the credential. The value of this parameter must be one of: `INITIATE_AND_ACCEPT INITIATE_AND_ACCEPT`, `ACCEPT_ONLY ACCEPT_ONLY`, and `INITIATE_ONLY INITIATE_ONLY`.

**异常**

- **GSSException** — containing the following major error codes: `DUPLICATE_ELEMENT GSSException.DUPLICATE_ELEMENT`, `BAD_MECH GSSException.BAD_MECH`, `BAD_NAMETYPE GSSException.BAD_NAMETYPE`, `NO_CRED GSSException.NO_CRED`, `CREDENTIALS_EXPIRED GSSException.CREDENTIALS_EXPIRED`, `FAILURE GSSException.FAILURE`
