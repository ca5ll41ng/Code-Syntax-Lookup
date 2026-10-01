---
id: "en-php-function-function-imap-thread"
language: "php"
lang: "en"
category: "function"
name: "imap_thread"
title: "Returns a tree of threaded message"
signature: "array|false imap_thread(IMAP\\Connection $imap, int $flags = SE_FREE)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-thread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a tree of threaded message

## Description

```php
array|false imap_thread(IMAP\Connection $imap, int $flags = SE_FREE)
```

Gets a tree of a threaded message.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$flags`**

## Return Values

`imap_thread()` returns an associative array containing a tree of messages threaded by `REFERENCES`, or `false` on error.

Every message in the current mailbox will be represented by three entries in the resulting array:

- `$thread["XX.num"]` - current message number
- `$thread["XX.next"]`
- `$thread["XX.branch"]`

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_thread()` Example**

```php


<?php

// Here we're outputting the threads of a newsgroup, in HTML

$nntp = imap_open('{news.example.com:119/nntp}some.newsgroup', '', '');
$threads = imap_thread($nntp);

foreach ($threads as $key => $val) {
  $tree = explode('.', $key);
  if ($tree[1] == 'num') {
    $header = imap_headerinfo($nntp, $val);
    echo "<ul>\n\t<li>" . $header->fromaddress . "\n";
  } elseif ($tree[1] == 'branch') {
    echo "\t</li>\n</ul>\n";
  }
}

imap_close($nntp);

?>

    
```
