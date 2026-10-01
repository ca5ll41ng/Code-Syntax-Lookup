---
id: "en-php-function-function-posix-mkfifo"
language: "php"
lang: "en"
category: "function"
name: "posix_mkfifo"
title: "Create a fifo special file (a named pipe)"
signature: "bool posix_mkfifo(string $filename, int $permissions)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-mkfifo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a fifo special file (a named pipe)

## Description

```php
bool posix_mkfifo(string $filename, int $permissions)
```

`posix_mkfifo()` creates a special `FIFO` file which exists in the file system and acts as a bidirectional communication endpoint for processes.

## Parameters

- **`$filename`** — Path to the `FIFO` file.
- **`$permissions`** — The second parameter `$permissions` has to be given in octal notation (e.g. 0644). The permission of the newly created `FIFO` also depends on the setting of the current `umask()`. The permissions of the created file are (mode & ~umask).

## Return Values

Returns `true` on success or `false` on failure.
