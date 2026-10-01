---
id: "en-php-function-function-getprotobyname"
language: "php"
lang: "en"
category: "function"
name: "getprotobyname"
title: "Get protocol number associated with protocol name"
signature: "int|false getprotobyname(string $protocol)"
module: "network"
source_url: "https://www.php.net/manual/en/function.getprotobyname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get protocol number associated with protocol name

## Description

```php
int|false getprotobyname(string $protocol)
```

`getprotobyname()` returns the protocol number associated with the protocol `$protocol` as per `/etc/protocols`.

## Parameters

- **`$protocol`** — The protocol name.

## Return Values

Returns the protocol number, or `false` on failure.

## Examples

**`getprotobyname()` example**

```php


<?php
$protocol = 'tcp';
$get_prot = getprotobyname($protocol);
if ($get_prot === FALSE) {
    echo 'Invalid Protocol';
} else {
    echo 'Protocol #' . $get_prot;
}
?>

    
```

## See Also

`getprotobynumber()`
