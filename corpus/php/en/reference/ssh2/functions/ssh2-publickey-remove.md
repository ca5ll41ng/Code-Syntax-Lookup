---
id: "en-php-function-function-ssh2-publickey-remove"
language: "php"
lang: "en"
category: "function"
name: "ssh2_publickey_remove"
title: "Remove an authorized publickey"
signature: "bool ssh2_publickey_remove(resource $pkey, string $algoname, string $blob)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-publickey-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove an authorized publickey

## Description

```php
bool ssh2_publickey_remove(resource $pkey, string $algoname, string $blob)
```

Removes an authorized publickey.

## Parameters

- **`$pkey`** — Publickey Subsystem Resource
- **`$algoname`** — Publickey algorithm (e.g.): ssh-dss, ssh-rsa
- **`$blob`** — Publickey blob as raw binary data

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> The public key subsystem is used for managing public keys on a server to which the client is *already* authenticated. To authenticate to a remote system using public key authentication, use the `ssh2_auth_pubkey_file()` function instead.

## See Also

 `ssh2_publickey_init()` `ssh2_publickey_add()` `ssh2_publickey_list()`
