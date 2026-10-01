---
id: "en-php-function-evstat-attr"
language: "php"
lang: "en"
category: "function"
name: "EvStat::attr"
title: "Returns the values most recently detected by Ev"
signature: "public array EvStat::attr()"
module: "ev"
source_url: "https://www.php.net/manual/en/evstat.attr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the values most recently detected by Ev

## Description

```php
public array EvStat::attr()
```

Returns array of the values most recently detected by Ev

## Parameters

This function has no parameters.

## Return Values

Returns array with the values most recently detect by Ev(without actual `stat` 'ing):

| Key | Description |
| --- | --- |
| `'dev'` | ID of device containing file |
| `'ino'` | inode number |
| `'mode'` | protection |
| `'nlink'` | number of hard links |
| `'uid'` | user ID of owner |
| `'size'` | total size, in bytes |
| `'gid'` | group ID of owner |
| `'rdev'` | device ID (if special file) |
| `'blksize'` | blocksize for file system I/O |
| `'blocks'` | number of 512B blocks allocated |
| `'atime'` | time of last access |
| `'ctime'` | time of last status change |
| `'mtime'` | time of last modification |

See `stat(2)` man page for details.

## Examples

**Monitor changes of /var/log/messages**

```php


<?php
// Use 10 second update interval.
$w = new EvStat("/var/log/messages", 8, function ($w) {
    echo "/var/log/messages changed\n";

    $attr = $w->attr();

    if ($attr['nlink']) {
        printf("Current size: %ld\n", $attr['size']);
        printf("Current atime: %ld\n", $attr['atime']);
        printf("Current mtime: %ld\n", $attr['mtime']);
    } else {
        fprintf(STDERR, "`messages` file is not there!");
        $w->stop();
    }
});

Ev::run();
?>

   
```

## See Also

  `EvStat::prev()`   `EvStat::stat()`
