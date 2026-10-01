---
id: "java-en-function-keytab-getkeys"
language: "java"
lang: "en"
category: "function"
name: "KeyTab.getKeys"
signature: "public KerberosKey[] getKeys(KerberosPrincipal principal)"
title: "KeyTab.getKeys"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KeyTab.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyTab.getKeys

```java
public KerberosKey[] getKeys(KerberosPrincipal principal)
```

Returns fresh keys for the given Kerberos principal.
 

 Implementation of this method should make sure the returned keys match
 the latest content of the keytab file. The result is a newly created
 copy that can be modified by the caller without modifying the keytab
 object. The caller should `destroy() destroy` the
 result keys after they are used.
 

 Please note that the keytab file can be created after the
 `KeyTab` object is instantiated and its content may change over
 time. Therefore, an application should call this method only when it
 needs to use the keys. Any previous result from an earlier invocation
 could potentially be expired.
 

 If there is any error (say, I/O error or format error)
 during the reading process of the keytab file, a saved result should be
 returned. If there is no saved result (say, this is the first time this
 method is called, or, all previous read attempts failed), an empty array
 should be returned. This can make sure the result is not drastically
 changed during the (probably slow) update of the keytab file.
 

 Each time this method is called and the reading of the file succeeds
 with no exception (say, I/O error or file format error),
 the result should be saved for `principal`. The implementation can
 also save keys for other principals having keys in the same keytab object
 if convenient.
 

 Any unsupported key read from the keytab is ignored and not included
 in the result.
 

 If this keytab is bound to a specific principal, calling this method on
 another principal will return an empty array.

**参数**

- **principal** — the Kerberos principal, must not be null.

**返回**

- the keys (never null, may be empty)

**异常**

- **NullPointerException** — if the `principal` argument is null
