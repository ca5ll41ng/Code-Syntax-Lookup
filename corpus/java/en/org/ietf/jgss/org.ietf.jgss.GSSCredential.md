---
id: "java-en-function-org-ietf-jgss-gsscredential"
language: "java"
lang: "en"
category: "function"
name: "org.ietf.jgss.GSSCredential"
title: "GSSCredential"
directive: "type"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential

This interface encapsulates the GSS-API credentials for an entity.  A
 credential contains all the necessary cryptographic information to
 enable the creation of a context on behalf of the entity that it
 represents.  It may contain multiple, distinct, mechanism specific
 credential elements, each containing information for a specific
 security mechanism, but all referring to the same entity. A credential
 may be used to perform context initiation, acceptance, or both.

 Credentials are instantiated using one of the
 `createCredential` methods in the `GSSManager
 GSSManager` class. GSS-API credential creation is not
 intended to provide a "login to the network" function, as such a
 function would involve the creation of new credentials rather than
 merely acquiring a handle to existing credentials. The
 section on credential
 acquisition in the package level description describes
 how existing credentials are acquired in the Java platform. GSS-API
 implementations must impose a local access-control policy on callers to
 prevent unauthorized callers from acquiring credentials to which they
 are not entitled. 

 Applications will create a credential object passing the desired
 parameters.  The application can then use the query methods to obtain
 specific information about the instantiated credential object.
 When the credential is no longer needed, the application should call
 the `dispose() dispose` method to release any resources held by
 the credential object and to destroy any cryptographically sensitive
 information.

 This example code demonstrates the creation of a GSSCredential
 implementation for a specific entity, querying of its fields, and its
 release when it is no longer needed:
 
```

    GSSManager manager = GSSManager.getInstance();

    // start by creating a name object for the entity
    GSSName name = manager.createName("myusername", GSSName.NT_USER_NAME);

    // now acquire credentials for the entity
    GSSCredential cred = manager.createCredential(name,
                    GSSCredential.ACCEPT_ONLY);

    // display credential information - name, remaining lifetime,
    // and the mechanisms it has been acquired over
    System.out.println(cred.getName().toString());
    System.out.println(cred.getRemainingLifetime());

    Oid [] mechs = cred.getMechs();
    if (mechs != null) {
            for (int i = 0; i< mechs.length; i++)
                    System.out.println(mechs[i].toString());
    }

    // release system resources held by the credential
    cred.dispose();
 
```

**参见**

- GSSManager#createCredential(int)
- GSSManager#createCredential(GSSName, int, Oid, int)
- GSSManager#createCredential(GSSName, int, Oid[], int)
- #dispose()

> *Since 1.4*
