---
id: "en-php-function-function-ssh2-publickey-init"
language: "php"
lang: "en"
category: "function"
name: "ssh2_publickey_init"
title: "Initialize Publickey subsystem"
signature: "resource|false ssh2_publickey_init(resource $session)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-publickey-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize Publickey subsystem

## Description

```php
resource|false ssh2_publickey_init(resource $session)
```

Request the Publickey subsystem from an already connected SSH2 server.

The publickey subsystem allows an already connected and authenticated client to manage the list of authorized public keys stored on the target server in an implementation agnostic manner. If the remote server does not support the publickey subsystem, the `ssh2_publickey_init()` function will return `false`.

## Parameters

- **`$session`**

## Return Values

Returns an `SSH2 Publickey Subsystem` resource for use with all other ssh2_publickey_*() methods or `false` on failure.

## Notes

> The public key subsystem is used for managing public keys on a server to which the client is *already* authenticated. To authenticate to a remote system using public key authentication, use the `ssh2_auth_pubkey_file()` function instead.

## See Also

 `ssh2_publickey_add()` `ssh2_publickey_remove()` `ssh2_publickey_list()`
