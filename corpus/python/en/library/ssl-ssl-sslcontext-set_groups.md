---
id: "python-en-function-ssl-sslcontext-set_groups"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_groups"
signature: "SSLContext.set_groups(groups, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_groups"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_groups

Set the groups allowed for key agreement for sockets created with this
context.  It should be a string in the `OpenSSL group list format
<https://docs.openssl.org/master/man3/SSL_CTX_set1_groups_list/>`_.

> **Note**
>
> When connected, the `SSLSocket.group` method of SSL sockets will
> return the group used for key agreement on that connection.
>

> *Added in 3.15*
