---
id: "en-php-guide-class-sessionhandlerinterface"
language: "php"
lang: "en"
category: "guide"
name: "class.sessionhandlerinterface"
title: "The SessionHandlerInterface class"
module: "session"
source_url: "https://www.php.net/manual/en/class.sessionhandlerinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SessionHandlerInterface class

SessionHandlerInterface

   Introduction  `SessionHandlerInterface` is an interface which defines the minimal prototype for creating a custom session handler. In order to pass a custom session handler to `session_set_save_handler()` using its OOP invocation, the class can implement this interface.    Please note the callback methods of this class are designed to be called internally by PHP and are not meant to be called from user-space code.          SessionHandlerInterface        Examples 
**Example using `SessionHandlerInterface`**

The following example provides file based session storage similar to the PHP sessions default save handler `$files`. This example could easily be extended to cover database storage using your favorite PHP supported database engine.

Note we use the OOP prototype with `session_set_save_handler()` and register the shutdown function using the function's parameter flag. This is generally advised when registering objects as session save handlers.

> For brevity, this example omits input validation. However, the `$id` parameters are actually user supplied values which require proper validation/sanitization to avoid vulnerabilities, such as path traversal issues. *So do not use this example unmodified in production environments.*

```php

<?php
class MySessionHandler implements SessionHandlerInterface
{
    private $savePath;

    public function open($savePath, $sessionName): bool
    {
        $this->savePath = $savePath;
        if (!is_dir($this->savePath)) {
            mkdir($this->savePath, 0777);
        }

        return true;
    }

    public function close(): bool
    {
        return true;
    }

    #[\ReturnTypeWillChange]
    public function read($id)
    {
        return (string) @file_get_contents("$this->savePath/sess_$id");
    }

    public function write($id, $data): bool
    {
        return file_put_contents("$this->savePath/sess_$id", $data) === false ? false : true;
    }

    public function destroy($id): bool
    {
        $file = "$this->savePath/sess_$id";
        if (file_exists($file)) {
            unlink($file);
        }

        return true;
    }

    #[\ReturnTypeWillChange]
    public function gc($maxlifetime)
    {
        foreach (glob("$this->savePath/sess_*") as $file) {
            if (filemtime($file) + $maxlifetime < time() && file_exists($file)) {
                unlink($file);
            }
        }

        return true;
    }
}

$handler = new MySessionHandler();
session_set_save_handler($handler, true);
session_start();

// proceed to set and retrieve values by key from $_SESSION

    
```
