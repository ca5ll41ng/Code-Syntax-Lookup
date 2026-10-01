---
id: "en-php-function-function-expect-popen"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]}
name: "expect_popen"
title: "Execute command via Bourne shell, and open the PTY stream to the process"
signature: "resource expect_popen(string $command)"
module: "expect"
source_url: "https://www.php.net/manual/en/function.expect-popen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute command via Bourne shell, and open the PTY stream to the process

## Description

```php
resource expect_popen(string $command)
```

Execute command via Bourne shell, and open the PTY stream to the process.

## Parameters

- **`$command`** — Command to execute.

## Return Values

Returns an open PTY stream to the processes `stdio`, `stdout`, and `stderr`.

On failure this function returns `false`.

## Examples

**`expect_popen()` example**

```php


<?php
// Login to the PHP.net CVS repository:
$stream = expect_popen ("cvs -d :pserver:anonymous@cvs.php.net:/repository login");
sleep (3);
fwrite ($stream, "phpfi\n");
fclose ($stream);
?>

   
```

## See Also

 `popen()`
